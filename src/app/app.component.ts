import { Component, VERSION, ViewChild } from '@angular/core';
import { EmailEditorComponent } from 'angular-email-editor';

import sample from './sample.json';

@Component({
  selector: 'root-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  options = {
    appearance: {
      theme: 'dark',
      panels: {
        tools: {
          dock: 'left',
        },
      },
    },
    tools: {
      image: {
        enabled: false,
      },
      text: {
        position: 0,
      },
    },
  };
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
    console.log(' > this.emailEditor.editorId=' + this.emailEditor.editorId);
    console.log(' > this.emailEditor.id=' + this.emailEditor.id);
    console.log(this.emailEditor);
    this.emailEditor.editor.loadDesign(sample);
  }

  editorReady(event2) {
    console.log('Editor is ready3');

    console.log(' > this.emailEditor.editorId=' + this.emailEditor.editorId);
    console.log(' > this.emailEditor.id=' + this.emailEditor.id);
    console.log(this.emailEditor);
  }

  exportHtml() {
    this.emailEditor.editor.exportHtml((data) =>
      console.log('exportHtml', data)
    );
  }

  saveDesign() {
    this.emailEditor.editor.saveDesign((data) =>
      console.log('saveDesign', data)
    );
  }
}

/*
  appearance: {
    theme: 'dark';
    panels: {
      tools: {
        dock: 'left';
      };
    };
  };
 */
