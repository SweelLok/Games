function confirmLogout(button) {
  Swal.fire({
      title: "Log out",
      text: "Are you sure you want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, log out",
      cancelButtonText: "Cancel"
  }).then((result) => {
      if (result.isConfirmed) {
          window.location.href = button.href;
      }
  });
}