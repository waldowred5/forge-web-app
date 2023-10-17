import { LinkIcon, PencilIcon } from "@heroicons/react/24/outline";

type Props = {
  content: any;
};

export function FileContent({ content }: Props) {
  const { summary, requirements, submissionTimeline, classifications, budget } =
    content;

  return (
    <div className="mx-auto lg:flex bg-white max-w-1xl rounded-3xl ring-1 ring-gray-200 sm:mt-5 lg:mx-0  lg:max-w-none">
      <div className="p-8 sm:p-10 lg:flex-auto">
        <div className="lg:flex lg:flex-col">
          <ContentHeader>
            <ContentTitle title="Summary" />
            <ContentActions />
          </ContentHeader>
          <ContentBody>{summary}</ContentBody>
        </div>

        <div className="lg:flex lg:flex-col lg:mt-10">
          <ContentHeader>
            <ContentTitle title="Requirements" />
            <ContentActions />
          </ContentHeader>
          <ContentBody>
            <ol className="flex flex-col">
              {requirements.split(";").map((requirement: any, i: number) => {
                return <li key={i}>{requirement}</li>;
              })}
            </ol>
          </ContentBody>
        </div>

        <div className="lg:flex lg:flex-col lg:mt-10">
          <ContentHeader>
            <ContentTitle title="Submission Timeline" />
            <ContentActions />
          </ContentHeader>

          {!submissionTimeline && (
            <p className="mt-5">Unable to find the submission timeline</p>
          )}

          {submissionTimeline && (
            <ContentBody>
              <ol className="relative border-l border-gray-200 dark:border-gray-700">
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    June 1, 2021
                  </time>
                  <h3 className="text-sm font-semibold text-gray-900">
                    RFP posted
                  </h3>
                </li>

                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    June 22, 2021
                  </time>
                  <h3 className="text-sm font-semibold text-gray-900">
                    Will respond to written questions received by
                  </h3>
                </li>

                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    June 1, 2021
                  </time>
                  <h3 className="text-sm font-semibold text-gray-900">
                    RFP responses due (electronic only)
                  </h3>
                </li>

                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    July 5 - 9, 2021
                  </time>
                  <h3 className="text-sm font-semibold text-gray-900">
                    Selection process
                  </h3>
                </li>

                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    July 12, 2021
                  </time>
                  <h3 className="text-sm font-semibold text-gray-900">
                    HPARC notifies selected firm
                  </h3>
                </li>

                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    July 26, 2021 – October 31, 2021
                  </time>
                  <h3 className="text-sm font-semibold text-gray-900">
                    Create AR Project
                  </h3>
                </li>

                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    November 1, 2021 – November 30, 2021
                  </time>
                  <h3 className="text-sm font-semibold text-gray-900">
                    Soft Launch of Yanaguana Garden Pilot Program
                  </h3>
                </li>

                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    December 1, 2021
                  </time>
                  <h3 className="text-sm font-semibold text-gray-900">
                    Launch Yanaguana Garden Pilot Program
                  </h3>
                </li>
              </ol>
            </ContentBody>
          )}
        </div>
      </div>

      <div className="p-8 sm:p-10 lg:flex-1">
        <div className="lg:flex-auto">
          <ContentHeader>
            <ContentTitle title="Classifications" />
            <ContentActions />
          </ContentHeader>
          <ContentBody>
            <div className="lg:flex lg:justify-between">
              {classifications.split(",").map((classification: any, i: any) => {
                return (
                  <span
                    key={i}
                    className="bg-blue-200 text-blue-600 text-xs font-medium mr-2 px-2.5 py-1 rounded"
                  >
                    {classification}
                  </span>
                );
              })}
            </div>
          </ContentBody>
        </div>

        <div className="lg:flex-auto lg:mt-10">
          <ContentHeader>
            <ContentTitle title="Budget" />
            <ContentActions />
          </ContentHeader>
          <ContentBody>{budget}</ContentBody>
        </div>
      </div>
    </div>
  );
}

function ContentHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="lg:flex lg:items-center lg:justify-between">{children}</div>
  );
}

function ContentBody({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-6 text-base leading-7 text-gray-600">{children}</div>
  );
}

function ContentTitle({ title }: { title: string }) {
  return (
    <h3 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h3>
  );
}

function ContentActions() {
  return (
    <div className="mt-5 flex lg:ml-4 lg:mt-0">
      <span className="hidden sm:block">
        <button
          type="button"
          className="inline-flex items-center rounded-md bg-white px-3 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          <PencilIcon
            className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          Edit
        </button>
      </span>
      <span className="ml-3 hidden sm:block">
        <button
          type="button"
          className="inline-flex items-center rounded-md bg-white px-3 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          <LinkIcon
            className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          View
        </button>
      </span>
    </div>
  );
}
