function toggleNotification(visible) {
    var notificationBar = document.getElementById('notificationBar');
    if (visible) {
        notificationBar.style.display = "block";
    } else {
        notificationBar.style.display = "none";
    }
}

function toggleUpdates() {
    var updatesSection = document.getElementById('updatesSection');
    if (updatesSection.style.display === "none") {
        updatesSection.style.display = "block";
    } else {
        updatesSection.style.display = "none";
    }
}

// Call the function with true to show the notification, or false to hide it
toggleNotification(false);

