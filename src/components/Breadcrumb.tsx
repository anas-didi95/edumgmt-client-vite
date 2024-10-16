import { FC } from "react";

interface IBreadcrumb {
  breadcrumbList: string[];
}
const Breadcrumb: FC<IBreadcrumb> = ({ breadcrumbList }) => (
  <nav className="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
    <ul>
      {breadcrumbList.map((breadcrumb, idx, list) => (
        <li
          key={`breadcrumb${idx}`}
          className={`${idx === list.length - 1 && "is-active"}`}>
          <a href="#" aria-current={`${idx === list.length - 1 && "page"}`}>
            {breadcrumb}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Breadcrumb;
