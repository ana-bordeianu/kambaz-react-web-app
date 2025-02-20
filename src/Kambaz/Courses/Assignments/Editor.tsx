export default function AssignmentEditor() {
	return (
		<div id="wd-assignments-editor">
			<h4>Assignment Name</h4>
			<input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
			<textarea id="wd-description">
				The assignment is available online Submit a link to the landing page of Netify.
			</textarea>
			<br /><br />
			<table>
				<tr>
					<td align="left" valign="top">
						<label htmlFor="wd-points">Points < /label>
						<input id="wd-points" value={100} />
					</td><br /><br />
				</tr>
				<tr>
					<td align="left" valign="top">
						<label  htmlFor="wd-group">Assignment Group </label>
		            	<select id="wd-group">
		                	<option value="GROUP1">Group 1</option>
		                	<option value="GROUP2">Group 2</option>
		                	<option value="GROUP3">Group 3</option>
		                	<option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
		            	</select><br /><br />
					</td>
				</tr>
				<tr>
					<td align="left" valign="top">
						<label  htmlFor="wd-display-grade-as">Display Grade as </label>
		            	<select id="wd-display-grade-as">
		                	<option value="P10">10%</option>
		                	<option value="P20">20%</option>
		                	<option value="P30">30%</option>
		                	<option value="P40">40%</option>
		                	<option value="P50">50%</option>
		                	<option value="P60">60%</option>
		                	<option value="P70">70%</option>
		                	<option value="P80">80%</option>
		                	<option value="P90">90%</option>
		                	<option value="P100">100%</option>
		                	<option selected value="PERCENTAGE">Percentage</option>
		            	</select><br /><br />
					</td>
				</tr>
				<tr>
					<td align="left" valign="top">
						<label  htmlFor="wd-submission-type">Submission Type </label>
		            	<select id="wd-submission-type">
		                	<option value="PHYSICAL">Physical</option>
		                	<option selected value="ONLINE">Online</option>
		            	</select><br /><br />
		            	<td aligh="right" valign="top">
			            	<label>Online Entry Options:</label><br/>
				            <input type="checkbox" name="check-entry" id="wd-text-entry"/>
				            <label htmlFor="wd-text-entry">Text Entry</label><br/>
				            <input type="checkbox" name="check-entry" id="wd-website-url"/>
				            <label htmlFor="wd-website-url">Website URL</label><br/>
				            <input type="checkbox" name="check-entry" id="wd-media-recordings"/>
				            <label htmlFor="wd-media-recordings">Media Recordings</label><br/>
				            <input type="checkbox" name="check-entry" id="wd-student-annotation"/>
				            <label htmlFor="wd-student-annotation">Student Annotation</label><br/>
				            <input type="checkbox" name="check-entry" id="wd-file-upload"/>
				            <label htmlFor="wd-file-upload">File Uploads</label><br /><br />
						</td>
					</td>
				</tr>
				<tr>
					<td align="left" valign="top">
						<label htmlFor="wd-assign-to">Assign < /label>
						<label htmlFor="wd-assign-to">Assign to < /label><br />
						<input id="wd-points" value={"Everyone"} /><br /><br />
						<label htmlFor="wd-due-date">Due < /label><br />
						<input type="date"
		                    value="2024-05-13"
		                    id="wd-due-date"/><br/><br />
		                <label htmlFor="wd-available-from">Available from       < /label>
		                <label htmlFor="wd-available-until">Until < /label><br />
		                <input type="date"
		                    value="2024-05-06"
		                    id="wd-available-from"/>
		                <input type="date"
		                    value="2024-05-20"
		                    id="wd-available-until"/><br/><br /><br />
					</td>
				</tr>
			</table>
			<button>Cancel</button><button>Save</button>
		</div>
);}
