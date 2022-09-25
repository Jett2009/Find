function findUserByUsername(usersArray, username) {
	return array.find(function (user) {
		return user.username === username;
	});
}
function removeUser(array, username) {
	let foundIndex = array.findIndex(function (user) {
		return user.username === username;
	});
	if (foundIndex === -1) return;

	return array.splice(foundIndex, 1)[0];
}
