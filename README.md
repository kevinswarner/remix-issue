# Remix Issue

- I am not sure if this is a Remix issue or just a problem with how I have things set up.
- I have two apps, and one ui library. These are part of an npm workspaces setup.
- One app is a NextJS app and the other a Remix App.

## Steps to Reproduce

1. Run "npm install" from the root directory.
2. In first terminal window, "npm run dev -w ui" in the root directory.
3. In second terminal window, "npm run dev -w remix" in the root directory.
4. In third terminal window, "npm run dev -w next" in the root directory.
5. Open first browser window to "http://localhost:3000/" - This is the remix app.
6. Open second browser window to "http://localhost:3001/" - This is the next app.

The screens should look similar, with the button being colored purple.

7. Open ./libs/ui/src/Button.jsx
8. Edit the child content for the button to...

```
{children} - HELLO
```

The NextJS app updates to show the change in the Button component. The Remix app does not update.

9. Make a change to the className property of the button by changing "bg-indigo-600" to "bg-red-600".

At this point, the NextJS app updates to show the change. The Remix app "may" update to show the earlier change from step 8, but normally will not. Also, it does not show the update to the CSS change.

You can try various changes to the Button component, and more often than not, the change is not picked up by Remix. It does appear that something happens in the terminal for Remix, but it never appears to update in the browser (or rarely).
