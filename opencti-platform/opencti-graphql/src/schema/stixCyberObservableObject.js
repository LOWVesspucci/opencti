import * as R from 'ramda';
import { ABSTRACT_STIX_CYBER_OBSERVABLE, REL_INDEX_PREFIX } from './general';
import {
  RELATION_CREATED_BY,
  RELATION_EXTERNAL_REFERENCE,
  RELATION_OBJECT,
  RELATION_OBJECT_LABEL,
  RELATION_OBJECT_MARKING,
} from './stixMetaRelationship';
import { RELATION_RELATED_TO } from './stixCoreRelationship';

export const ENTITY_AUTONOMOUS_SYSTEM = 'Autonomous-System';
export const ENTITY_DIRECTORY = 'Directory';
export const ENTITY_DOMAIN_NAME = 'Domain-Name';
export const ENTITY_EMAIL_ADDR = 'Email-Addr';
export const ENTITY_EMAIL_MESSAGE = 'Email-Message';
export const ENTITY_EMAIL_MIME_PART_TYPE = 'Email-Mime-Part-Type';
export const ENTITY_HASHED_OBSERVABLE_ARTIFACT = 'Artifact';
export const ENTITY_HASHED_OBSERVABLE_STIX_FILE = 'StixFile'; // Because File already used
export const ENTITY_HASHED_OBSERVABLE_X509_CERTIFICATE = 'X509-Certificate';
export const ENTITY_IPV4_ADDR = 'IPv4-Addr';
export const ENTITY_IPV6_ADDR = 'IPv6-Addr';
export const ENTITY_MAC_ADDR = 'Mac-Addr';
export const ENTITY_MUTEX = 'Mutex';
export const ENTITY_NETWORK_TRAFFIC = 'Network-Traffic';
export const ENTITY_PROCESS = 'Process';
export const ENTITY_SOFTWARE = 'Software';
export const ENTITY_URL = 'Url';
export const ENTITY_USER_ACCOUNT = 'User-Account';
export const ENTITY_WINDOWS_REGISTRY_KEY = 'Windows-Registry-Key';
export const ENTITY_WINDOWS_REGISTRY_VALUE_TYPE = 'Windows-Registry-Value-Type';
export const ENTITY_X509_V3_EXTENSIONS_TYPE = 'X509-V3-Extensions-Type';
export const ENTITY_X_OPENCTI_CRYPTOGRAPHIC_KEY = 'X-OpenCTI-Cryptographic-Key';
export const ENTITY_X_OPENCTI_CRYPTOGRAPHIC_WALLET = 'X-OpenCTI-Cryptocurrency-Wallet';
export const ENTITY_X_OPENCTI_HOSTNAME = 'X-OpenCTI-Hostname';
export const ENTITY_X_OPENCTI_TEXT = 'X-OpenCTI-Text';
export const ENTITY_X_OPENCTI_USER_AGENT = 'X-OpenCTI-User-Agent';

const STIX_CYBER_OBSERVABLES_HASHED_OBSERVABLES = [
  ENTITY_HASHED_OBSERVABLE_ARTIFACT,
  ENTITY_HASHED_OBSERVABLE_STIX_FILE,
  ENTITY_HASHED_OBSERVABLE_X509_CERTIFICATE,
];
const STIX_CYBER_OBSERVABLES = [
  ENTITY_AUTONOMOUS_SYSTEM,
  ENTITY_DIRECTORY,
  ENTITY_DOMAIN_NAME,
  ENTITY_EMAIL_ADDR,
  ENTITY_EMAIL_MESSAGE,
  ENTITY_EMAIL_MIME_PART_TYPE,
  ENTITY_HASHED_OBSERVABLE_ARTIFACT,
  ENTITY_HASHED_OBSERVABLE_STIX_FILE,
  ENTITY_HASHED_OBSERVABLE_X509_CERTIFICATE,
  ENTITY_X509_V3_EXTENSIONS_TYPE,
  ENTITY_IPV4_ADDR,
  ENTITY_IPV6_ADDR,
  ENTITY_MAC_ADDR,
  ENTITY_MUTEX,
  ENTITY_NETWORK_TRAFFIC,
  ENTITY_PROCESS,
  ENTITY_SOFTWARE,
  ENTITY_URL,
  ENTITY_USER_ACCOUNT,
  ENTITY_WINDOWS_REGISTRY_KEY,
  ENTITY_WINDOWS_REGISTRY_VALUE_TYPE,
  ENTITY_X_OPENCTI_CRYPTOGRAPHIC_KEY,
  ENTITY_X_OPENCTI_CRYPTOGRAPHIC_WALLET,
  ENTITY_X_OPENCTI_HOSTNAME,
  ENTITY_X_OPENCTI_USER_AGENT,
  ENTITY_X_OPENCTI_TEXT,
];
export const isStixCyberObservableHashedObservable = (type) =>
  R.includes(type, STIX_CYBER_OBSERVABLES_HASHED_OBSERVABLES);
export const isStixCyberObservable = (type) =>
  R.includes(type, STIX_CYBER_OBSERVABLES) || type === ABSTRACT_STIX_CYBER_OBSERVABLE;

export const stixCyberObservableOptions = {
  StixCyberObservablesOrdering: {
    objectMarking: `${REL_INDEX_PREFIX}${RELATION_OBJECT_MARKING}.definition`,
    objectLabel: `${REL_INDEX_PREFIX}${RELATION_OBJECT_LABEL}.value`,
  },
  StixCyberObservablesFilter: {
    createdBy: `${REL_INDEX_PREFIX}${RELATION_CREATED_BY}.internal_id`,
    markedBy: `${REL_INDEX_PREFIX}${RELATION_OBJECT_MARKING}.internal_id`,
    labelledBy: `${REL_INDEX_PREFIX}${RELATION_OBJECT_LABEL}.internal_id`,
    relatedTo: `${REL_INDEX_PREFIX}${RELATION_RELATED_TO}.internal_id`,
    objectContained: `${REL_INDEX_PREFIX}${RELATION_OBJECT}.internal_id`,
    hasExternalReference: `${REL_INDEX_PREFIX}${RELATION_EXTERNAL_REFERENCE}.internal_id`,
  },
};
