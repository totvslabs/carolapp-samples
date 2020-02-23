import { Injectable, isDevMode } from '@angular/core';

import * as configs from '../../../proxy.conf.json';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  private objConnectors: any;

  getConnectorIdDefault(): string {
    return configs['connectorId'];
  }

  getApplicationId(): string {
    return this.getConnectors().applicationId;
  }

  getConnectorId(): string {
    return this.getConnectors().applicationIdInputConnector;
  }

  getAppIdInputConnStudentRetention(): string {
    return this.getConnectors().applicationIdInputConnStudentRetention;
  }

  getEnvironment(): string {
    if (isDevMode()) {
      return configs['environment'];
    } else {
      const environment = window.location.pathname.split('/')[1];
      return environment === 'apps' ? window.location.host.split('.')[0] : environment;
    }
  }

  getOrganization(): string {
    if (isDevMode()) {
      return configs['organization'];
    } else {
      const organization = window.location.host.split('.')[0];
      const environment = window.location.pathname.split('/')[1];
      return environment === 'apps' ? null : organization;
    }
  }

  private getConnectors() {
    if (!this.objConnectors) {
      this.objConnectors = JSON.parse(localStorage.getItem('Connectors'));
    }

    return this.objConnectors;
  }
}
