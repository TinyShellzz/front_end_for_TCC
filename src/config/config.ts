class Config {
  firstRender: any;
  documentContent: any;
  content_name: any;
  setCountent: any;
  TCCDocumentStructure: any;
  pre_page: any;
}

export var config = new Config();
config.firstRender = true;

config.TCCDocumentStructure = [
  { title: "介绍", url: "introduce", child: [] },
  {
    title: "服务器守则",
    url: "rules",
    child: [
      { title: "服务器守则1", url: "rules1" },
      { title: "服务器守则2", url: "rules2" },
    ],
  },
  {
    title: "赞助",
    url: "sponsers",
    child: [
      { title: "赞助1", url: "sponsers1" },
      { title: "赞助2", url: "sponsers2" },
    ],
  },
];
