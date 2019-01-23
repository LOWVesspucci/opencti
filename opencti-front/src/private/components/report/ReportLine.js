import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { KeyboardArrowRight, Description } from '@material-ui/icons';
import { compose, pathOr, take } from 'ramda';
import inject18n from '../../../components/i18n';
import ItemMarking from '../../../components/ItemMarking';

const styles = theme => ({
  item: {
    paddingLeft: 10,
    transition: 'background-color 0.1s ease',
    cursor: 'pointer',
    '&:hover': {
      background: 'rgba(0, 0, 0, 0.1)',
    },
  },
  itemIcon: {
    color: theme.palette.primary.main,
  },
  bodyItem: {
    height: '100%',
    fontSize: 13,
  },
  goIcon: {
    position: 'absolute',
    right: 10,
    marginRight: 0,
  },
  itemIconDisabled: {
    color: theme.palette.text.disabled,
  },
  placeholder: {
    display: 'inline-block',
    height: '1em',
    backgroundColor: theme.palette.text.disabled,
  },
});

const inlineStyles = {
  name: {
    float: 'left',
    width: '40%',
    height: 20,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  author: {
    float: 'left',
    width: '20%',
    height: 20,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  published: {
    float: 'left',
    width: '15%',
    height: 20,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  marking: {
    float: 'left',
    height: 20,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
};

class ReportLineComponent extends Component {
  render() {
    const { fd, classes, report } = this.props;

    return (
      <ListItem classes={{ root: classes.item }} divider={true} component={Link} to={`/dashboard/reports/all/${report.id}`}>
        <ListItemIcon classes={{ root: classes.itemIcon }}>
          <Description/>
        </ListItemIcon>
        <ListItemText primary={
          <div>
            <div className={classes.bodyItem} style={inlineStyles.name}>
              {report.name}
            </div>
            <div className={classes.bodyItem} style={inlineStyles.author}>
              {pathOr('', ['createdByRef', 'node', 'name'], report)}
            </div>
            <div className={classes.bodyItem} style={inlineStyles.published}>
              {fd(report.published)}
            </div>
            <div className={classes.bodyItem} style={inlineStyles.marking}>
              {take(2, pathOr([], ['markingDefinitions', 'edges'], report)).map(markingDefinition => <ItemMarking key={markingDefinition.node.id} variant='inList'
                                                                                                                  label={markingDefinition.node.definition}/>)}
            </div>
          </div>
        }/>
        <ListItemIcon classes={{ root: classes.goIcon }}>
          <KeyboardArrowRight/>
        </ListItemIcon>
      </ListItem>
    );
  }
}

ReportLineComponent.propTypes = {
  report: PropTypes.object,
  classes: PropTypes.object,
  fd: PropTypes.func,
};

const ReportLineFragment = createFragmentContainer(ReportLineComponent, {
  report: graphql`
      fragment ReportLine_report on Report {
          id
          name
          createdByRef {
              node {
                  name
              }
          }
          published
          markingDefinitions {
              edges {
                  node {
                      id
                      definition
                  }
              }
          }
      }
  `,
});

export const ReportLine = compose(
  inject18n,
  withStyles(styles),
)(ReportLineFragment);

class ReportLineDummyComponent extends Component {
  render() {
    const { classes } = this.props;
    return (
      <ListItem classes={{ default: classes.item }} divider={true}>
        <ListItemIcon classes={{ root: classes.itemIconDisabled }}>
          <Description/>
        </ListItemIcon>
        <ListItemText primary={
          <div>
            <div className={classes.bodyItem} style={inlineStyles.name}>
              <div className={classes.placeholder} style={{ width: '80%' }}/>
            </div>
            <div className={classes.bodyItem} style={inlineStyles.author}>
              <div className={classes.placeholder} style={{ width: '70%' }}/>
            </div>
            <div className={classes.bodyItem} style={inlineStyles.published}>
              <div className={classes.placeholder} style={{ width: 140 }}/>
            </div>
            <div className={classes.bodyItem} style={inlineStyles.marking}>
              <div className={classes.placeholder} style={{ width: '90%' }}/>
            </div>
          </div>
        }/>
        <ListItemIcon classes={{ root: classes.goIcon }}>
          <KeyboardArrowRight/>
        </ListItemIcon>
      </ListItem>
    );
  }
}

ReportLineDummyComponent.propTypes = {
  classes: PropTypes.object,
};

export const ReportLineDummy = compose(
  inject18n,
  withStyles(styles),
)(ReportLineDummyComponent);