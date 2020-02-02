var MyTask = /** @class */ (function () {
    function MyTask(name) {
        this.name = name;
    }
    MyTask.prototype.run = function (arg) {
        console.log("running: " + this.name + ", arg: " + arg);
    };
    return MyTask;
}());
var myTask = new MyTask('someTask');
myTask.run("test");
