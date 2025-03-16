# Angular Workshop: Controlled Components

https://github.com/user-attachments/assets/facea32e-ea7e-4f70-ad0f-5b0ef9bdc9e4


### Task Description (Delta)

In this task, you'll extend the application by using signals for dynamic data handling and updating the profile picture URLs.

1. **Signal for Random Index (`randomIndex`)**:

   - In the `AppComponent`, define a signal called `randomIndex` initialized to `90`. This signal will generate a random index for the profile picture.

2. **Signal and Computed for URLs**:

   - Create a `previousProfileUrl` signal initialized with a URL pointing to a default profile picture.
   - Define a `currentProfileUrl` computed property that dynamically generates the URL for the profile picture using the `randomIndex` signal.

3. **Handling the Click Event (`profilePictureClicked`)**:

   - Update the `profilePictureClicked()` method in the `AppComponent` to:
     - Update the `previousProfileUrl` signal with the `profileUrl` received from the clicked profile picture.
     - Update the `randomIndex` signal with a new random index whenever a profile picture is clicked.

4. **Template Update**:
   - Bind the `previousProfileUrl` and `currentProfileUrl` to the `profileUrl` input of two `app-profile-picture` components.
   - Ensure both components handle the `profilePictureClicked` event and trigger the corresponding event in the parent component.

### Hints:

- Use the `signal` to store and update reactive values (`randomIndex` and `previousProfileUrl`).
- Use `computed` to create derived values based on reactive signals (e.g., `currentProfileUrl`).
- In the `profilePictureClicked()` method, use the `update()` method of signals to modify their values dynamically.
- Ensure to bind the signals properly to the `profileUrl` property in the `app-profile-picture` components.
