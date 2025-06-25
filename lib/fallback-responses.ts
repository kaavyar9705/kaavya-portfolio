export const FALLBACK_RESPONSES = {
  greeting: [
    "Hi there! 👋 I'm here to tell you about Kaavya Radhakrishnan. I can share information about her background, experience, projects, skills, or personal interests. What would you like to know?",
    "Hello! 💜 I'd love to tell you about Kaavya - from her technical expertise to her love of purple everything and cheesecake! What interests you most?",
  ],

  education: [
    "🎓 **Education & Background**\n\nKaavya is a Computer Science student at the University of Maryland, College Park (graduating December 2026). She's a Presidential Scholarship recipient and University Honors student, pursuing a CS major with double minors in Business and Data Science.\n\nShe graduated from Langley High School in McLean, Virginia, and sometimes accidentally learns entire textbook chapters while just trying to skim! 📚",
  ],

  experience: [
    "💼 **Professional Experience**\n\nKaavya is currently working as:\n• **Data Analytics & AI Intern at Mindsprint** - Building full-stack Snowflake analytics dashboards\n• **Software Engineer at Hack4Impact** - Developing React/Firebase apps for nonprofits\n• Previously interned at **SES Space & Defense** and works as an **Instructional Design Assistant at UMD**\n\nShe has experience across data analytics, software engineering, and educational technology, with a focus on building impactful solutions.",
  ],

  skills: [
    "💻 **Technical Skills**\n\nKaavya's technical skills include:\n• **Backend:** Java, Python, C, Flask, Firebase, Node.js\n• **Frontend:** JavaScript, TypeScript, React, HTML, CSS, Flutter, Figma\n• **Data & Analytics:** SQL, MATLAB, Snowflake, Pandas, Jupyter Notebook\n• **Tools:** Git, Salesforce, Microsoft Office\n\nShe's particularly strong in full-stack development and data analytics, with experience in both web and mobile development.",
  ],

  projects: [
    "🚀 **Featured Projects**\n\n• **Lunari** - Women's wellness app using ML (won 'Best Active-Wellness/Health Hack' at Technica 2024) 🏆\n• **Purple Intern Bingo Board** - Tracks scores, has leaderboards, throws confetti (because she's extremely pro-confetti!) 🎉\n• **Snowflake Analytics Dashboard** - Full-stack React + Flask dashboard\n• **Winrock International Web App** - React/Firebase for global nonprofit\n• **YouTube Collaboration Networks Research** - Published in iConference 2023\n\nHer projects span healthcare technology, data analytics, nonprofit solutions, and academic research.",
  ],

  personality: [
    "🎨 **Personality & Quirks**\n\nKaavya has some amazing quirks that make her unique:\n• Thinks corners should always be fully rounded, not just top-left\n• UI color schemes must be girlier (and preferably purple! 💜)\n• Once debugged something just because 'the vibe was off'\n• Enjoys debugging as a personality trait\n• Gets personally offended by bad dropdown scroll behavior\n• Can roast your CSS and cheer you on in the same breath\n• Will build a React app for literally anything!",
  ],

  hobbies: [
    "💜 **Personal Interests & Hobbies**\n\nKaavya loves:\n• **Dance** - Competitive college team + Indian classical dance diploma 💃\n• **Baking** - Probably makes amazing cheesecakes (her favorite dessert!) 🍰\n• **Coloring books** - Perfect aesthetic relaxation 🎨\n• **Beach trips** - Great way to unwind 🏖️\n• **Matcha** - She's a matcha enthusiast! 🍵\n\nShe lives in Reston, Virginia and graduated from Langley High School in McLean. Purple is her favorite color (explains all the purple-themed projects!).",
  ],

  contact: [
    "📞 **Contact Information**\n\n• **Email:** kaavyakri@gmail.com\n• **Phone:** (703) 586-0032\n• **LinkedIn:** linkedin.com/in/kaavyaradhakrishnan\n• **GitHub:** github.com/kaavyar9705\n• **Location:** Reston, Virginia (currently), College Park, MD (school)\n\nFeel free to reach out for collaboration opportunities, internships, or just to connect!",
  ],

  collaboration: [
    "🤝 **Collaboration Opportunities**\n\nKaavya is always interested in:\n• Software development projects (especially full-stack web apps)\n• Data analytics and ML projects\n• Nonprofit technology solutions\n• Research collaborations\n• Hackathons and tech competitions\n• Mentoring and educational initiatives\n\nShe's passionate about using technology for positive social impact. Reach out to her at kaavyakri@gmail.com to discuss potential collaborations!",
  ],

  default: [
    "I'd be happy to tell you about Kaavya! I can share information about her:\n\n🎓 **Education & Background**\n💼 **Professional Experience**\n💻 **Technical Skills**\n🚀 **Projects & Research**\n🎨 **Personality & Quirks**\n💜 **Hobbies & Interests**\n📞 **Contact Information**\n\nWhat specific aspect would you like to know more about?",
    "I can tell you all about Kaavya - from her technical expertise to why everything she builds is purple! What would you like to know?",
  ],
}

export function getFallbackResponse(query: string): string {
  const lowerQuery = query.toLowerCase()

  // Greeting responses
  if (lowerQuery.includes("hello") || lowerQuery.includes("hi") || lowerQuery.includes("hey")) {
    return FALLBACK_RESPONSES.greeting[Math.floor(Math.random() * FALLBACK_RESPONSES.greeting.length)]
  }

  // Education questions
  if (
    lowerQuery.includes("education") ||
    lowerQuery.includes("school") ||
    lowerQuery.includes("university") ||
    lowerQuery.includes("background")
  ) {
    return FALLBACK_RESPONSES.education[0]
  }

  // Experience questions
  if (
    lowerQuery.includes("experience") ||
    lowerQuery.includes("work") ||
    lowerQuery.includes("job") ||
    lowerQuery.includes("intern")
  ) {
    return FALLBACK_RESPONSES.experience[0]
  }

  // Skills questions
  if (
    lowerQuery.includes("skill") ||
    lowerQuery.includes("technology") ||
    lowerQuery.includes("programming") ||
    lowerQuery.includes("tech")
  ) {
    return FALLBACK_RESPONSES.skills[0]
  }

  // Projects questions
  if (lowerQuery.includes("project") || lowerQuery.includes("portfolio") || lowerQuery.includes("built")) {
    return FALLBACK_RESPONSES.projects[0]
  }

  // Personality questions
  if (
    lowerQuery.includes("personality") ||
    lowerQuery.includes("quirk") ||
    lowerQuery.includes("like") ||
    lowerQuery.includes("debug") ||
    lowerQuery.includes("design")
  ) {
    return FALLBACK_RESPONSES.personality[0]
  }

  // Hobbies questions
  if (
    lowerQuery.includes("hobby") ||
    lowerQuery.includes("hobbies") ||
    lowerQuery.includes("fun") ||
    lowerQuery.includes("interest") ||
    lowerQuery.includes("favorite") ||
    lowerQuery.includes("purple") ||
    lowerQuery.includes("dance") ||
    lowerQuery.includes("baking") ||
    lowerQuery.includes("beach") ||
    lowerQuery.includes("matcha") ||
    lowerQuery.includes("cheesecake")
  ) {
    return FALLBACK_RESPONSES.hobbies[0]
  }

  // Contact questions
  if (
    lowerQuery.includes("contact") ||
    lowerQuery.includes("reach") ||
    lowerQuery.includes("email") ||
    lowerQuery.includes("phone")
  ) {
    return FALLBACK_RESPONSES.contact[0]
  }

  // Collaboration questions
  if (
    lowerQuery.includes("collaborate") ||
    lowerQuery.includes("work together") ||
    lowerQuery.includes("opportunity")
  ) {
    return FALLBACK_RESPONSES.collaboration[0]
  }

  // Default response
  return FALLBACK_RESPONSES.default[Math.floor(Math.random() * FALLBACK_RESPONSES.default.length)]
}
