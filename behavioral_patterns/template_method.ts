class Form {
  constructor(public name: string) {}
}

abstract class SaveForm<T> {
  public save(form: Form) {
    const res = this.fill(form);
    this.log(res);
    this.send(res);
  }

  protected abstract fill(form: Form): T;
  protected log(data: T): void {
    console.log(data);
  }
  protected abstract send(data: T): void;
}

class FirstAPI extends SaveForm<string> {
  protected fill(form: Form): string {
    return form.name;
  }
  protected send(data: string): void {
    console.log(`Sending data: ${data}`);
  }
}

class SecondAPI extends SaveForm<{ data: string }> {
  protected fill(form: Form): { data: string } {
    return { data: form.name };
  }
  protected send(data: { data: string }): void {
    console.log(`Sending data: ${data}`);
  }
}

// implementation
const form1 = new FirstAPI();
form1.save(new Form('Name'));

const form2 = new SecondAPI();
form2.save(new Form('Name2'));
