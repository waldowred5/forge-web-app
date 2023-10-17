export const useMockFiles = () => {
  const files = [
    {
      filePath: "RFP-Augmented-Reality-Project.pdf",
      displayName: "RFP Augmented Reality Project",
      fileContent: {
        summary:
          "An app that uses Augmented Reality (AR) technology that provides an innovative and unique way to recognize three donors of the Hemisfair Park Redevelopment Corporation Area",
        requirements:
          "- Create an app for Apple iOS and Android, using Hemisfair’s branding guidelines, that will work on the following devices: all iPhone, iPad and Android models; - Use QR codes and GPS technology to activate the AR program; - AR experience to pop up near a tree that has already been claimed showing a photo, text and/or audio about the person being honored/memorialized; - A Search for Tree option to find the recognition name; - A map function to help app users find a specific tree by showing a pathway to its location. Users can also open an interactive map of the park, select a tree and receive walking directions to the tree;",
        submissionTimeline: true,
        classifications: "Mobile app, Environment, Wellbeing, Health",
        budget: "The budget range is $50,000 - $100,000.",
      },
    },
    {
      filePath: "RFP-Housing-Opportunities-Commision.pdf",
      displayName: "RFP Housing Opportunities Commision",
      fileContent: {
        summary:
          "The Housing Opportunities Commission (HOC), based in Montgomery County, Maryland, is seeking comprehensive software development services for two potential projects: the HOC Freedom of Information Act (FOIA) Request System and the HOC Meeting Tracking System. These projects aim to enhance organizational processes and improve services.",
        requirements:
          "Tenant Meeting Sign Up; In Meeting Agenda Tracking; HOC Staff follow up and Complaint tracking; Robust Document search; Executive Dashboard; ADA Compliant; Integration with HOC’s Website; ",
        submissionTimeline: false,
        classifications: "Software, Housing, Compliance, Commission",
        budget: "Unable to find out the budget range",
      },
    },
  ];

  return { files };
};
