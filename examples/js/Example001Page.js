var Example001Page = CUORE.Class(CUORE.Page, {

    initializeServices: function() {
    },

    initializeComponents: function() {
        this.labelShowcase();
    },

    labelShowcase: function() {
    	var label = new CUORE.Components.LabelPanel('label.greeting');
        this.addComponent(label, 'labelGreeting', CUORE.Behaviours.REPLACE);
    },
});
