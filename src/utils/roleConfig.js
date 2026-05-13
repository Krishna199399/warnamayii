// Role configuration for dashboard routing
export const roleConfig = {
  advisor: {
    defaultRoute: '/dashboard/advisor',
    displayName: 'Advisor'
  },
  domanager: {
    defaultRoute: '/dashboard/domanager',
    displayName: 'DO Manager'
  },
  areamanager: {
    defaultRoute: '/dashboard/areamanager',
    displayName: 'Area Manager'
  },
  zonalmanager: {
    defaultRoute: '/dashboard/zonalmanager',
    displayName: 'Zonal Manager'
  },
  statehead: {
    defaultRoute: '/dashboard/statehead',
    displayName: 'State Head'
  }
};

export const getRoleRoute = (role) => {
  return roleConfig[role]?.defaultRoute || '/dashboard/advisor';
};

export const getRoleDisplayName = (role) => {
  return roleConfig[role]?.displayName || 'User';
};
