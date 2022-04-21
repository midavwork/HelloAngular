import { Component, VERSION, ViewChild } from '@angular/core';
import { EmailEditorComponent } from 'angular-email-editor';

@Component({
  selector: 'root-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-email-editor';
  name = 'Angular ' + VERSION.major;

  @ViewChild(EmailEditorComponent)
  private emailEditor: EmailEditorComponent;

  editorLoaded(event2) {
    // load the design json here
    // this.emailEditor.editor.loadDesign({});

    // const json = /* DESIGN JSON GOES HERE */
    // this.emailEditor.loadDesign(json);

    console.log('S-a incarcat editorul de email!!!');
  }

  editorReady(event2) {
    console.log('Editor is ready2');
  }

  exportHtml() {
    this.emailEditor.editor.exportHtml((data) =>
      console.log('exportHtml', data)
    );
  }
}

/*
*/
