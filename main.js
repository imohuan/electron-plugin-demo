module.exports = {
  apply(hooks) {
    hooks.add("extension-init", (...args) => console.log("hello init", ...args));
    hooks.add("extension-destroy", (...args) => console.log("hello destroy", ...args));
    hooks.add("extension-progress", (...args) => console.log("hello progress", ...args));

    return {
      getVersion: () => console.log("更新版本 1.0.5")
    };
  }
};
