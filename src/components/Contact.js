import React from "react";

export const Contact = () => (
   <div className="row py-4 text-muted">
		<div className="col-md col-xl-8">
			<p><strong>Questions?</strong></p>
			<p>We've got answers. Try us.</p>
		</div>
		<div className="col-md col-xl-4 ml-auto">
			<p><strong>You can also DM me here:</strong></p>
			<div className="input-group">
			    <span className="input-group-btn">
			    <button className="btn btn-dark" type="button">Click to send a massage</button>
			    </span>
			</div>
		</div>
	</div>
);