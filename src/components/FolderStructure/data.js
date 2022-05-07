export const data = {
  name: "Root",
  isFolder: true,
  items: [
    {
      name: "Src",
      isFolder: true,
      items: [
        {
          name: "Src 1.1",
          isFolder: false,
        },
      ],
    },
    {
      name: "Package.json",
      isFolder: false,
    },
    {
      name: "Components",
      isFolder: true,
      items: [
        {
          name: "Components 1.1",
          isFolder: true,
          items: [
            {
              name: "Components 1.1.1",
              isFolder: false,
            },
          ],
        },
        {
          name: "Components 1.2",
          isFolder: false,
        },
      ],
    },
  ],
};
