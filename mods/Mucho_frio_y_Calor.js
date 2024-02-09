elements.Calor = {
    color: "#ff2f2f",
    tool: function(pixel) {
        pixel.temp += 500000000000000000000500000000005000000000000000000005000000000000000000000000000000;
		pixelTempCheck(pixel)
    },
    category: "tools",
};
elements.Frio = {
    color: "#2f2fff",
    tool: function(pixel) {
        pixel.temp += -500000000000000000000500000500000000000000000000500000000000000000000000000000000000;
		pixelTempCheck(pixel)
    },
    category: "tools",
};
