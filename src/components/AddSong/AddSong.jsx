
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

{/* <div class ="all-reviews">
if (book.reviews.length) { 
<thead>
<tr class="space">
  <th></th>
     <th>Date</th>
  <th>Review</th>
  <th>Rating</th>
</tr>
</thead>
<tbody>
<% book.reviews.forEach(function(r) { %>
  <form
              action="/books/<%= book._id %>/reviews/<%= r._id %>?_method=DELETE"
              id="delete-form"
              method="POST"
          >
  <tr>
    <td><button type="submit">X</button></td>
    <td><%= r.createdAt.toLocaleDateString() %></td>
    <td><%= r.content %></td>
    <td><%= r.rating %></td>
  </tr>
<% }); %>
</tbody>
</table>
<% } else { %>
<h5>No Reviews Yet</h5>
<% } %>
</div> */}