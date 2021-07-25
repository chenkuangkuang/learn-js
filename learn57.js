// 实现一个简易的模板引擎

function render(tem, data) {
  let template = tem;
  template = template
    .replace(/[\r\n\t]/g, "")
    .replace(/\{\{~(.+?)\}\}/g, (_, p1) => {
      return '";' + p1 + ' out+="';
    })
    .replace(/\{\{(.+?)\}\}/g, (_, p1) => {
      return '"; out+=""+' + p1 + '+""; out+="';
    });
  console.log('=template=1', template);
  template = 'var out=""; out += "' + template + '";return out;';
  console.log('=template=', template);
  console.log('===========');
  var _render = new Function(...Object.keys(data), template);

  return _render(...Object.keys(data).map(k => data[k]));
}

var template =
  "test array{{~for (var i in group.jobs) {}}{{group.jobs[i]}}  {{~}}} test obj {{group.jobs[1]}} {{group.name}} leader是{{leader}}";

var data = {
  group: {
    name: "group1",
    jobs: ["job1", "job2"]
  },
  leader: "张三"
};

console.log(render(template, data));