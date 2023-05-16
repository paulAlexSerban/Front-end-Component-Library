import { TaskList, config as TLConfig } from "./_TaskList";
import { ToDoListApp, config as TDLConfig } from "./_ToDoListApp";

(() => {
    document.querySelectorAll(`[data-js-${TLConfig.type}=${TLConfig.name}]`).forEach((el) => {
        TaskList(el);
    });

    document.querySelectorAll(`[data-js-${TDLConfig.type}=${TDLConfig.name}]`).forEach((el) => {
        ToDoListApp(el);
    });
})();
