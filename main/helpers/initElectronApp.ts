import { app, BrowserWindow } from "electron";
import { createNextDevServer } from "./next-server";

const initElectronApp = () => {

  const createWindow = () => {
    const win: BrowserWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
      },
    });
  
    // win.loadFile(path.join(__dirname, "../index.html"));
    win.loadURL(`http://localhost:3000/`);
    win.webContents.openDevTools();
  
    createNextDevServer("renderer", win);
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
