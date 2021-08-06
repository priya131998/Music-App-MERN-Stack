
function AddSong({ album }) {
	return (
<div class = "review-container">
<h2>Reviews</h2>
<form id="add-review-form" method="POST"
action="/albums/ album._id/songs">
<label>Review:</label>
<textarea name="content"></textarea>
<input type="submit" value="Add Review" />
</form>
</div>

  );
}

