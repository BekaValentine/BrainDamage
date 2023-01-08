class DatabaseManager {
    constructor(home, db_path) {
        if (db_path == "") {
            db_path = home;
        }
        this.db_path = db_path;
        this.edge_type_definitions_path = this.db_path + "/edge_type_definitions.json";

        this.edge_type_definitions_table = [];
    }

    async ensure_db_directory_exists() {
        try {
            await Neutralino.filesystem.readDirectory(this.db_path);
        } catch(err) {
            if ("code" in err && err.code == "NE_FS_NOPATHE") {
                await Neutralino.filesystem.createDirectory(this.db_path);
            }
        }
    }

    async load_edge_type_definitions_exists() {
        try {
            let file_contents = await Neutralino.filesystem.readFile(this.edge_type_definitions_path);
            this.edge_type_definitions_table = JSON.parse(file_contents);
        } catch (err) {
            if ("code" in err && err.code == "NE_FS_FILRDER") {
                await Neutralino.filesystem.writeFile(this.edge_type_definitions_path, JSON.stringify([]));
            }
        }
    }

    async load() {
        await this.ensure_db_directory_exists();
        await this.load_edge_type_definitions_exists();
    }

    async save() {

    }
}

async function main() {
    let db_path = await Neutralino.os.getEnv("DB_PATH");
    let home = await Neutralino.os.getEnv("HOME");
    console.log(`DB Path: ${db_path}`);
    console.log(`HOME: ${home}`);

    let db_manager = new DatabaseManager(home, db_path);
    console.log(`DB Manager DB Path: ${db_manager.db_path}`)
    db_manager.load();
}

// // This is just a sample app. You can structure your Neutralinojs app code as you wish.
// // This example app is written with vanilla JavaScript and HTML.
// // Feel free to use any frontend framework you like :)
// // See more details: https://neutralino.js.org/docs/how-to/use-a-frontend-library

// function showInfo() {
//     document.getElementById('info').innerHTML = `
//         ${NL_APPID} is running on port ${NL_PORT}  inside ${NL_OS}
//         <br/><br/>
//         <span>server: v${NL_VERSION} . client: v${NL_CVERSION}</span>
//         `;
// }

// function openDocs() {
//     Neutralino.os.open("https://neutralino.js.org/docs");
// }

// function openTutorial() {
//     Neutralino.os.open("https://www.youtube.com/watch?v=txDlNNsgSh8&list=PLvTbqpiPhQRb2xNQlwMs0uVV0IN8N-pKj");
// }

// function setTray() {
//     if(NL_MODE != "window") {
//         console.log("INFO: Tray menu is only available in the window mode.");
//         return;
//     }
//     let tray = {
//         icon: "/resources/icons/trayIcon.png",
//         menuItems: [
//             {id: "VERSION", text: "Get version"},
//             {id: "SEP", text: "-"},
//             {id: "QUIT", text: "Quit"}
//         ]
//     };
//     Neutralino.os.setTray(tray);
// }

// function onTrayMenuItemClicked(event) {
//     switch(event.detail.id) {
//         case "VERSION":
//             Neutralino.os.showMessageBox("Version information",
//                 `Neutralinojs server: v${NL_VERSION} | Neutralinojs client: v${NL_CVERSION}`);
//             break;
//         case "QUIT":
//             Neutralino.app.exit();
//             break;
//     }
// }

// function onWindowClose() {
//     Neutralino.app.exit();
// }

Neutralino.init();

main();

// Neutralino.events.on("trayMenuItemClicked", onTrayMenuItemClicked);
// Neutralino.events.on("windowClose", onWindowClose);

// if(NL_OS != "Darwin") { // TODO: Fix https://github.com/neutralinojs/neutralinojs/issues/615
//     setTray();
// }

// showInfo();
