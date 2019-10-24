import { AppConfig } from '../../_core/models/app-config';

export const initialConfigState: AppConfig = {
    id: null,
    name: null,
    email: null,
    role: null,
    active: null,
    permissions: []
}

export function getInitialState(): AppConfig {
  return initialConfigState;
}