class Notify {
  send(template: string, to: string) {
    console.log(`Sending ${template} to ${to}`);
  }
}

class Log {
  log(message: string) {
    console.log(message);
  }
}

class Template {
  private templates = [{ name: 'other', template: '<h1>some template</h1>' }];

  getByName(name: string) {
    return this.templates.find((t) => t.name === name);
  }
}

class NotificationFacade {
  private notify: Notify;
  private logger: Log;
  private template: Template;

  constructor() {
    this.notify = new Notify();
    this.logger = new Log();
    this.template = new Template();
  }

  send(to: string, templateName: string) {
    const data = this.template.getByName(templateName);
    if (!data) {
      this.logger.log('Template nof found');
      return;
    }
    this.notify.send(data.template, to);
    this.logger.log('Template has sent');
  }
}

// implementation
const s = new NotificationFacade();
s.send('email', 'other');
