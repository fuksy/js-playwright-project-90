import { expect } from '@playwright/test';
import { test } from '../fixtures/fixtures';

const taskData = {
  title: "Task 20",
  assigneeEmail: "jack@yahoo.com",
  content: "Task 20 description",
  status: "To Publish",
  labels: ["feature", "task"],
};

test.beforeEach(async ({ taskManager: { logInPage, sideBar } }) => {
  await logInPage.logIn();
  await sideBar.goToTasksTab();
});

test("each status should content at least 1 task", async ({ taskManager: { tasksTab } }) => {
  const statuses = await tasksTab.statuses.all();

  for (const status of statuses) {
    const tasksInStatus = await status.locator(tasksTab.tasks).count();
    await expect(tasksInStatus).toBeGreaterThanOrEqual(1);
  }
});

test("should create new tasks", async ({ taskManager: { sideBar, tasksTab } }) => {
  await tasksTab.createNewTask();

  await tasksTab.form.fillInAssignee(taskData.assigneeEmail);
  await tasksTab.form.fillInTitle(taskData.title);
  await tasksTab.form.fillInContent(taskData.content);
  await tasksTab.form.fillInStatus(taskData.status);
  await tasksTab.form.fillInLabel(taskData.labels);
  await tasksTab.form.saveItem();
  await sideBar.goToTasksTab();

  await expect(await tasksTab.getTaskDataByTitle(taskData.title)).toMatchObject(
    {
      title: taskData.title,
      assigneeEmail: taskData.assigneeEmail,
      status: taskData.status,
    }
  );
});

test("should not create task whithout data", async ({ taskManager: { tasksTab } }) => {
  await tasksTab.createNewTask();

  await expect(tasksTab.form.saveButton).toBeDisabled();
});

test("should edit task data", async ({ taskManager: { tasksTab } }) => {
  await tasksTab.editTaskByTitle("Task 2");
  await tasksTab.form.fillInTitle(taskData.title);
  await tasksTab.form.saveItem();

  const editedTask = await tasksTab.getTaskDataByTitle(taskData.title);

  await expect(editedTask.title).toEqual(taskData.title);
});

test("should be possible to delete tasks", async ({ taskManager: { tasksTab } }) => {
  const taskToDeleteTitle = "Task 2";

  await tasksTab.deleteTaskByTitle(taskToDeleteTitle);

  await expect(await tasksTab.findTaskByTitle(taskToDeleteTitle)).toHaveCount(0);
});

test("should be possible to drag tasks between statuses", async ({ taskManager: { sideBar, tasksTab } }) => {
  const additionalTaskData = {
    title: "Task 21",
    assigneeEmail: "jack@yahoo.com",
    content: "Task 21 description",
    status: "Published",
    labels: ["feature", "task"],
  };
  await tasksTab.createDefaultTask(taskData);
  await sideBar.goToTasksTab();
  await tasksTab.createDefaultTask(additionalTaskData);
  await sideBar.goToTasksTab();

  await tasksTab.dragAndDropTask(taskData.title, additionalTaskData.status);
  const sourceTaskData = await tasksTab.getTaskDataByTitle(taskData.title);

  await expect(sourceTaskData.status).toEqual(additionalTaskData.status);
});


