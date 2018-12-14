module.exports.render_test = (req,res,next) => {
        console.log("inside render test");
	console.log(__dirname);
        res.sendFile(__dirname + "/test.html");
}
