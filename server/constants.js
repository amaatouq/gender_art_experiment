export const stageData = {
  description: {
    title: "Describe",
    questionText: "How would you describe this work to someone who is unable to see it?",
    subQuestionText: "Your description may include mention of the medium (painting, sculpture, textile, etc), the material (metal, cotton, etc), the style (abstract, impressionist, etc), the themes (science, pop culture, etc), the content (a ball, a landscape, a family, etc), or any other information as you see appropriate:"
  },
  qualities: {
    title: "Choose Qualities",
    questionText:
      "Please select the 3 most relevant qualities to describe this artwork:"
  },
  value: {
    title: "Choose Artwork Value",
    questionText:
      "On average, artwork created in the past five years has been priced at $. What price would you assign to this artwork, if it were being sold at a gallery in a major city?",
    expertOptions: [
      {
        id: "tier1",
        name: "$0 - 100"
      },
      {
        id: "tier2",
        name: "$101 - 1,000"
      },
      {
        id: "tier3",
        name: "$1,001 - 5,000"
      },
      {
        id: "tier4",
        name: "$5,001 - 10,000"
      },
      {
        id: "tier5",
        name: "$10,001 - 50,000"
      },
      {
        id: "tier6",
        name: "$50,001 - 100,000"
      },
      {
        id: "tier7",
        name: "$100,001 - 500,000"
      },
      {
        id: "tier8",
        name: "Over $500,000"
      }
    ],
    layOptions: [
      {
        id: "below",
        name: "Below Average"
      },
      {
        id: "average",
        name: "Average"
      },
      {
        id: "above",
        name: "Above average"
      }
    ]
  },
  preference: {
    title: "Choose Your Preference",
    questionText:
      "What is your preference for this artwork from 0 (least preference) to 100 (most preference)?"
  }
};
