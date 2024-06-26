import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: '<app-server></app-server><app-server></app-server>',
  templateUrl: "./servers.component.html",
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = "TestServer";
  serverCreated = false;
  servers = ["Testserver", "Testserver 2"];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    } ,2000)
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName)
    this.serverCreationStatus = "Server was created! Name is " + this.serverName
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value
  }
}
