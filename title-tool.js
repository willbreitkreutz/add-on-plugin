
var title = document.createElement("h1");
title.classList.add('title-overlay');
title.classList.add('global-hidden');
title.setAttribute('contenteditable', true);
var newContent = document.createTextNode("Title");
title.appendChild(newContent);
var currentDiv = document.getElementById("root");
document.body.insertBefore(title, currentDiv);

var TitleTool = React.createClass({
  onClick: function(){
    title.classList.toggle('global-hidden');
  },
  render: function(){
    return React.createElement(
      "div",
      { title: "Toggle Title on Map", className: 'upper-right-icon', onClick: this.onClick },
      React.createElement("i", { className: "mdi mdi-format-title" })
    );
  }
})

var toggleTitlePlugin = {
  register: function(){
    CorpsMap.actions.register({
      pluginName: 'Toggle Title',
      components:[{
        component: TitleTool,
        role:'upper-right-toolbar'
      }]
    });
  }
}

toggleTitlePlugin.register();
