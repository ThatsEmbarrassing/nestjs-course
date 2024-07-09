export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export class TopPageHHVacancies {
  count: number;
  salaries: Record<'junior' | 'middle' | 'senior', number>;
}

export class TopPageAdvatage {
  title: string;
  description: string;
}

export class TopPageModel {
  _id: string;
  firstLevelCategory: TopLevelCategory;
  secondLevelCategory: string;
  title: string;
  category: string;
  seoText: string;
  tagsTitle: string;
  tags: string[];
  advatages: TopPageAdvatage[];
  hh?: TopPageHHVacancies;
}
