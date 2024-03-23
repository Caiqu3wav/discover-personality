

export const determineMbtiType = (functionScores, setMbtiType, setMbtiTypeLink) => {
    let currentType = "";
    let currentTypeLink = "";

    if (functionScores.Te > functionScores.Fe && functionScores.Te > functionScores.Ne && functionScores.Te > functionScores.Se) {
      if (functionScores.Si > functionScores.Te && functionScores.Si > functionScores.Ni) {
        currentType = "ISTJ";
        currentTypeLink = "/typespages/istj";
    } else if (functionScores.Ni > functionScores.Te && functionScores.Ni > functionScores.Si) {
      currentType = "INTJ";
      currentTypeLink = "/typespages/intj";
    } else if (functionScores.Si > functionScores.Ni) {
      currentType = "ESTJ";
      currentTypeLink = "/typespages/estj";
    } else if (functionScores.Ni > functionScores.Si) {
      currentType = "ENTJ";
      currentTypeLink = "/typespages/entj";
      }
    } else if (functionScores.Fe > functionScores.Te && functionScores.Fe > functionScores.Se && functionScores.Fe > functionScores.Ne) {
      if (functionScores.Si > functionScores.Fe && functionScores.Si > functionScores.Ni) {
        currentType = "ISFJ";
        currentTypeLink = "/typespages/isfj";
      } else if (functionScores.Ni > functionScores.Fe && functionScores.Ni > functionScores.Si) {
        currentType = "INFJ";
        currentTypeLink = "/typespages/infj";
      } else if (functionScores.Si > functionScores.Ni) {
        currentType = "ESFJ";
        currentTypeLink = "/typespages/esfj";
      } else if (functionScores.Ni > functionScores.Si) {
        currentType = "ENFJ";
        currentTypeLink = "/typespages/enfj";
      }
    } else if (functionScores.Ne > functionScores.Te && functionScores.Ne > functionScores.Se && functionScores.Ne > functionScores.Fe) {
      if (functionScores.Ti > functionScores.Ne && functionScores.Ti > functionScores.Fi) {
        currentType = "INTP";
        currentTypeLink = "/typespages/intp";

      } else if (functionScores.Fi > functionScores.Ne && functionScores.Fi > functionScores.Ti) {
        currentType = "INFP";
        currentTypeLink = "/typespages/infp";
      } else if (functionScores.Ti > functionScores.Fi) {
        currentType = "ENTP";
        currentTypeLink = "/typespages/entp";
      } else if (functionScores.Fi > functionScores.Ti) {
        currentType = "ENFP";
        currentTypeLink = "/typespages/enfp";
      }
    } else if (functionScores.Se > functionScores.Te && functionScores.Se > functionScores.Fe && functionScores.Se > functionScores.Ne) {
      if (functionScores.Ti > functionScores.Se && functionScores.Ti > functionScores.Fi) {
        currentType = "ISTP";
        currentTypeLink = "/typespages/istp";

      } else if (functionScores.Fi > functionScores.Se && functionScores.Fi > functionScores.Ti) {
        currentType = "ISFP";
        currentTypeLink = "/typespages/isfp";
      } else if (functionScores.Fi > functionScores.Ti) {
        currentType = "ESFP";
        currentTypeLink = "/typespages/esfp";
      } else if (functionScores.Ti > functionScores.Fi) {
        currentType = "ESTP";
        currentTypeLink = "/typespages/estp";
      }
    }
    setMbtiType(currentType);
    setMbtiTypeLink(currentTypeLink);
  };