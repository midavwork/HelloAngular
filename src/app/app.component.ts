import { Component, VERSION, ViewChild } from '@angular/core';
import { EmailEditorComponent } from 'angular-email-editor';

import sample from './sample.json';
import sampleMailTemplate from './sampleMailTemplate.json';

@Component({
  selector: 'root-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // those options mimics unlayer.init({ ... })
  options = {
    // doesn't work => form tool is not visible cause displayMode has no effect with the component from github - should be cloned and updated/changed/extended locally in the project with 'web' layout
    displayMode: 'web',
    //customCSS: ['https://examples.unlayer.com/examples/custom-css/custom.css'], // doesn't work - premium feature
    appearance: {
      theme: 'dark',
      panels: {
        tools: {
          dock: 'left',
        },
      },
    },
    tabs: {
      content: {
        enabled: true,
        icon: 'fa-user', // changed tab icon
        // or icon: "https://my.cdn.com/blocks_icon.png",
      },
      blocks: {
        enabled: false,
      },
      'custom#my_tab': {
        // doesn't work - premium feature
        enabled: true,
      },
    },
    tools: {
      image: {
        // OK hiding
        enabled: false,
      },
      text: {
        // OK reposition
        position: 0,
      },
      form: {
        // not working for email layout!
        enabled: true,
      },
      social: {
        // not working - it is a premium feature
        properties: {
          icons: {
            value: {
              iconType: 'squared',
              icons: [
                { name: 'Facebook', url: 'https://facebook.com/' },
                { name: 'Twitter', url: 'https://twitter.com/' },
              ],
            },
          },
        },
      },
    },
  };
  title = 'angular-email-editor';
  name = 'Angular ' + VERSION.major;

  @ViewChild(EmailEditorComponent)
  private emailEditor: EmailEditorComponent;

  constructor() {
    console.log('called constructor');
  }

  editorLoaded(event2) {
    // load the design json here
    // this.emailEditor.editor.loadDesign({});

    // const json = /* DESIGN JSON GOES HERE */
    // this.emailEditor.loadDesign(json);
    console.log(
      '- ------------displayMode=' + this.emailEditor.editor.displayMode
    );
    //this.emailEditor.editor.displayMode = 'web';
    console.log('S-a incarcat editorul de email!!!');

    console.log(
      '- ------------displayMode' + this.emailEditor.editor.displayMode
    );
    console.log(' > this.emailEditor.editorId=' + this.emailEditor.editorId);
    console.log(' > this.emailEditor.id=' + this.emailEditor.id);
    console.log(this.emailEditor);
    this.emailEditor.editor.loadDesign(sampleMailTemplate);
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
