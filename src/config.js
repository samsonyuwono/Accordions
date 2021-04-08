export const config = {
  // Integer: posts to fetch
  // use `_limit` parameter to truncate response
  // Bounds: [1, 100]
  fetchCount: 10,

  // Integer: panels to show when the page loads
  // Bounds: [0, `fetchCount`]
  initialPanelCount: 5,

  // Integer: index of panel to show as expanded when the page loads
  // Use `-1` for no panel expanded
  // Bounds: [-1, `initialPanelCount`]
  initialExpandedPanel: 1,

  // Integer: Maximum number of panels to allow the user to display
  // Bounds: [`initialPanelCount`, `fetchCount`]
  maxPanelCount: 30,

  // Integer: Minimum number of panels to allow the user to display
  // Bounds: [0, `fetchCount`]

  minPanelCount: 0,

  // Bounds: [-1, 1]
  // If `-1`, there are no restrictions on the number of concurrent expanded panels
  // If `0`, no panels can be expanded; all panel titles should appear disabled
  // If `1`, expanding a panel should collapse the previously expanded panel
  maxExpandedPanelCount: 1
};
