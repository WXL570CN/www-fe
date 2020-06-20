const PurchasingCenter = () => import('./compontents/purchasing-center/Main.vue');
const Details = () => import('./compontents/purchasing-center/Details.vue')
const SearchResult = () => import('./compontents/purchasing-center/SearchResult.vue')
const CompanyTrack = () => import('./compontents/company-track/CompanyTrack.vue')
const TrackDetail = () => import('./compontents/company-track/TrackDetail.vue')
const AddTrack = () => import('./compontents/company-track/AddTrack.vue')
const EmptyTrack = () => import('./compontents/company-track/EmptyTrack.vue')
const EnterpriseCertification = () => import('./compontents/data-center/EnterpriseCertification.vue')
const CertificationStatus = () => import('./compontents/data-center/CertificationStatus.vue')


const routes = [
  { path: '/purchasingCenter', component: PurchasingCenter },
  { path: '/details', component: Details },
  { path: '/searchResult', component: SearchResult },
  { path: '/companyTrack', component: CompanyTrack },
  { path: '/trackDetail', component: TrackDetail },
  { path: '/addTrack', component: AddTrack },
  { path: '/emptyTrack', component: EmptyTrack },
  { path: '/', component: EnterpriseCertification },
  { path: '/asd', component: CertificationStatus },
];
export default routes;
