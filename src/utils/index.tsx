import { Suspense } from "react";

const Loading = () => <div>Loading...</div>

const SuspenseComponent = ({ children }: { children: JSX.Element}) => <Suspense fallback={<Loading/>}>{children}</Suspense>

export {SuspenseComponent}