import * as AdaptiveCards from 'adaptivecards';

export default {
  supportsInteractivity: !0,
  spacing: {
    small: 10,
    default: 20,
    medium: 30,
    large: 40,
    extraLarge: 50,
    padding: 20
  },
  separator: {
    lineThickness: 1,
    lineColor: '#EEEEEE'
  },
  fontTypes: {
    default: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontSizes: {
        small: 12,
        default: 14,
        medium: 17,
        large: 21,
        extraLarge: 26
      },
      fontWeights: {
        lighter: 200,
        default: 400,
        bolder: 600
      }
    },
    monospace: {
      fontFamily: "'Courier New', Courier, monospace",
      fontSizes: {
        small: 12,
        default: 14,
        medium: 17,
        large: 21,
        extraLarge: 26
      },
      fontWeights: {
        lighter: 200,
        default: 400,
        bolder: 600
      }
    }
  },
  imageSizes: {
    small: 40,
    medium: 80,
    large: 160
  },
  containerStyles: {
    default: {
      backgroundColor: '#FFFFFF',
      foregroundColors: {
        default: {
          default: '#333333',
          subtle: '#EE333333'
        },
        dark: {
          default: '#000000',
          subtle: '#66000000'
        },
        light: {
          default: '#FFFFFF',
          subtle: '#33000000'
        },
        accent: {
          default: '#2E89FC',
          subtle: '#882E89FC'
        },
        attention: {
          default: '#cc3300',
          subtle: '#DDcc3300'
        },
        good: {
          default: '#028A02',
          subtle: '#DD027502'
        },
        warning: {
          default: '#e69500',
          subtle: '#DDe69500'
        }
      }
    },
    emphasis: {
      backgroundColor: '#08000000',
      foregroundColors: {
        default: {
          default: '#333333',
          subtle: '#EE333333'
        },
        dark: {
          default: '#000000',
          subtle: '#66000000'
        },
        light: {
          default: '#FFFFFF',
          subtle: '#33000000'
        },
        accent: {
          default: '#2E89FC',
          subtle: '#882E89FC'
        },
        attention: {
          default: '#cc3300',
          subtle: '#DDcc3300'
        },
        good: {
          default: '#028A02',
          subtle: '#DD027502'
        },
        warning: {
          default: '#e69500',
          subtle: '#DDe69500'
        }
      }
    },
    accent: {
      backgroundColor: '#C7DEF9',
      foregroundColors: {
        default: {
          default: '#333333',
          subtle: '#EE333333'
        },
        dark: {
          default: '#000000',
          subtle: '#66000000'
        },
        light: {
          default: '#FFFFFF',
          subtle: '#33000000'
        },
        accent: {
          default: '#2E89FC',
          subtle: '#882E89FC'
        },
        attention: {
          default: '#cc3300',
          subtle: '#DDcc3300'
        },
        good: {
          default: '#028A02',
          subtle: '#DD027502'
        },
        warning: {
          default: '#e69500',
          subtle: '#DDe69500'
        }
      }
    },
    good: {
      backgroundColor: '#CCFFCC',
      foregroundColors: {
        default: {
          default: '#333333',
          subtle: '#EE333333'
        },
        dark: {
          default: '#000000',
          subtle: '#66000000'
        },
        light: {
          default: '#FFFFFF',
          subtle: '#33000000'
        },
        accent: {
          default: '#2E89FC',
          subtle: '#882E89FC'
        },
        attention: {
          default: '#cc3300',
          subtle: '#DDcc3300'
        },
        good: {
          default: '#028A02',
          subtle: '#DD027502'
        },
        warning: {
          default: '#e69500',
          subtle: '#DDe69500'
        }
      }
    },
    attention: {
      backgroundColor: '#FFC5B2',
      foregroundColors: {
        default: {
          default: '#333333',
          subtle: '#EE333333'
        },
        dark: {
          default: '#000000',
          subtle: '#66000000'
        },
        light: {
          default: '#FFFFFF',
          subtle: '#33000000'
        },
        accent: {
          default: '#2E89FC',
          subtle: '#882E89FC'
        },
        attention: {
          default: '#cc3300',
          subtle: '#DDcc3300'
        },
        good: {
          default: '#028A02',
          subtle: '#DD027502'
        },
        warning: {
          default: '#e69500',
          subtle: '#DDe69500'
        }
      }
    },
    warning: {
      backgroundColor: '#FFE2B2',
      foregroundColors: {
        default: {
          default: '#333333',
          subtle: '#EE333333'
        },
        dark: {
          default: '#000000',
          subtle: '#66000000'
        },
        light: {
          default: '#FFFFFF',
          subtle: '#33000000'
        },
        accent: {
          default: '#2E89FC',
          subtle: '#882E89FC'
        },
        attention: {
          default: '#cc3300',
          subtle: '#DDcc3300'
        },
        good: {
          default: '#028A02',
          subtle: '#DD027502'
        },
        warning: {
          default: '#e69500',
          subtle: '#DDe69500'
        }
      }
    }
  },
  inputs: {
    label: {
      requiredInputs: {
        weight: AdaptiveCards.TextWeight.Bolder,
        suffix: ' *',
        suffixColor: AdaptiveCards.TextColor.Attention
      },
      optionalInputs: {
        weight: AdaptiveCards.TextWeight.Bolder
      }
    },
    errorMessage: {
      color: AdaptiveCards.TextColor.Attention,
      weight: AdaptiveCards.TextWeight.Bolder
    }
  },
  actions: {
    maxActions: 5,
    spacing: AdaptiveCards.Spacing.Default,
    buttonSpacing: 10,
    showCard: {
      actionMode: AdaptiveCards.ShowCardActionMode.Inline,
      inlineTopMargin: 16
    },
    actionsOrientation: AdaptiveCards.Orientation.Horizontal,
    actionAlignment: AdaptiveCards.ActionAlignment.Left
  },
  adaptiveCard: {
    allowCustomStyle: !1
  },
  imageSet: {
    imageSize: AdaptiveCards.Size.Medium,
    maxImageHeight: 100
  },
  factSet: {
    title: {
      color: AdaptiveCards.TextColor.Default,
      size: AdaptiveCards.TextSize.Default,
      isSubtle: !1,
      weight: AdaptiveCards.TextWeight.Bolder,
      wrap: !0,
      maxWidth: 150
    },
    value: {
      color: AdaptiveCards.TextColor.Default,
      size: AdaptiveCards.TextSize.Default,
      isSubtle: !1,
      weight: AdaptiveCards.TextWeight.Default,
      wrap: !0
    },
    spacing: 10
  },
  carousel: {
    maxCarouselPages: 10,
    minAutoplayDuration: 5e3
  }
};
