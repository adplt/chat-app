import {theme} from '../../styles/core.styles';

export default {
  errIcon: {
    color: theme.primary,
    paddingRight: 5,
    fontSize: theme.fontSizeSmall
  },
  errorText: {
    color: theme.red,
    fontSize: theme.fontSizeSmall,
    fontWeight: theme.fontWeightMedium
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  }
};
