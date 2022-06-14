import { getSelectors } from '@ngrx/router-store';
import { routerFeature } from './router.feature';

export const { selectQueryParam, selectRouteParam } =
  getSelectors(routerFeature);
