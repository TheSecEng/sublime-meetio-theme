module.exports = [
    {
        name: "[Diff] Deleted",
        scope: ["diff.deleted", "diff.deleted.char"],
        background: "color(var(red) alpha(0.08))",
        foreground: "var(red)",
    },
    {
        name: "[Diff] Insert",
        scope: ["diff.inserted", "diff.inserted.char"],
        background: "color(var(green) alpha(0.08))",
        foreground: "var(green)",
    },
]
