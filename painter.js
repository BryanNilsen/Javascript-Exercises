const painter = {
  tools: ["brush", "roller", "caulk", "sandpaper", "dropcloth"],
  uniform: "white overalls",
  cost_per_hour: 25.0,
  insured: true,
  // Add an action that the painter can perform.
  paint: function(room) {
    console.log(`I painted the ${room}`);
  },
  // BONUS: Add a method that allows us to add new tools for the painter.
  addTool: function(tool) {
    this.tools.push(tool);
    console.log(this.tools);
  }
};

// take the actions by execucting the methods you created.
painter.paint("room");
painter.addTool("ladder");
