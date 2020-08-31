import { app, BrowserWindow } from "electron";
import { createNextDevServer } from "./next-server";

const initElectronApp = () => {

  const createWindow = () => {
    createNextDevServer("renderer");
  };
  
  app.whenReady().then(createWindow);
  
  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
  });
  
  app.on("activate", () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
}


export { initElectronApp };
