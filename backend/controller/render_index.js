module.exports.render_index = (req,res,next) => {
	console.log("inside render index");
	res.sendFile("/home/bitnami/apps/bus_app/web\ pages/school_admin/dashboard/maps-google-maps-builder.html");
}
