import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Star } from "lucide-react";
import { api } from "@/utils/api";
import { Separator } from "@/components/ui/separator";

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Kardasz.Dev</title>
        <meta name="description" content="Adrian Kardasz Resume Site." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        suppressHydrationWarning
        className="min-w-screen flex h-screen min-h-screen w-screen justify-center overflow-scroll bg-slate-100"
      >
        <div
          key="Main-Container"
          className="container flex h-fit  min-h-full items-stretch text-slate-400 shadow-2xl"
        >
          <div key="Left-Sidebar" className=" w-96 bg-slate-800 p-4 ">
            <div
              key="Sidebar-Header"
              className="flex w-full flex-col items-center justify-center p-2"
            >
              <Image
                className="h-32 w-32 rounded-full "
                width={36}
                height={36}
                src="/AdrianAvatar.svg"
                alt={""}
              />
              <h1 className="text-3xl font-semibold text-slate-200">
                Adrian Kardasz
              </h1>
              <h2 className="text-2xl font-medium italic text-slate-300 ">
                Data Architect
              </h2>
              <h3 className="flex items-center gap-2 align-baseline text-lg font-normal ">
                <Mail className="inline h-5" />
                Adrian.kardasz1@gmail.com
              </h3>
              <h3 className="flex items-center gap-2 align-baseline text-lg font-normal ">
                <MapPin className="inline h-5 " />
                Chicago, IL https://www.linkedin.com/in/adriankardasz/
              </h3>

              <h3 className="flex items-center gap-2 align-baseline text-lg font-normal ">
                <MapPin className="inline h-5 " />
                https://www.linkedin.com/in/adriankardasz/
              </h3>
            </div>
            <div
              key="Sidebar-Header"
              className="flex w-full flex-col items-start justify-center gap-2 p-2 text-base text-slate-500"
            >
              <h3
                key="certificates-header"
                className="w-full border-b-2 border-slate-300  text-lg font-semibold text-slate-300"
              >
                CERTIFICATES
              </h3>
              <ul key="certificates-items" className="text-semibold pl-2">
                <li>
                  <p className="text-slate-400">
                    Google Professional Cloud Architect
                  </p>
                  <a
                    className="pl-2 text-sm italic"
                    href="https://www.credential.net/8297ec88-ebb3-4f80-825e-641b71e4cdca"
                  >
                    ID: 68891424
                  </a>
                </li>
                <li>
                  <p className="text-slate-400">
                    Google Professional Cloud Data Engineer
                  </p>
                  <p className="pl-2 text-sm italic">In Progress</p>
                </li>
                <li>
                  <p className="text-base  text-slate-400">
                    Google Professional Cloud DevOps Engineer
                  </p>
                  <p className="pl-2 text-sm italic">In Progress</p>
                </li>
                <li>
                  <p className="text-slate-400">
                    Azure Administrator Associate
                  </p>
                  <a
                    className="pl-2 text-sm italic"
                    href="https://www.credly.com/badges/cabf026c-45dd-47cd-a0d5-14d66409769b"
                  >
                    ID: 989206665
                  </a>
                </li>
              </ul>
              <h3
                key="education-header"
                className="w-full border-b-2 border-slate-300  text-lg font-semibold text-slate-300"
              >
                EDUCATION
              </h3>
              <ul key="education-items" className="text-semibold pl-2">
                <li>
                  <p className="text-slate-400">Western Illinois University</p>
                  <span className="pl-2 text-sm italic">
                    Bachelors of Science in Computer Science
                  </span>
                </li>
              </ul>
              <h3
                key="languages-header"
                className="w-full border-b-2 border-slate-300  text-lg font-semibold text-slate-300"
              >
                LANGUAGES
              </h3>
              <ul key="languages-items" className="text-semibold w-full pl-2">
                <li className="flex items-center justify-between">
                  <p className="text-slate-400">English</p>
                  <span className="flex items-center pl-2 text-sm italic">
                    <Star className="h-4 w-4 fill-yellow-300" />
                    <Star className="h-4 w-4 fill-yellow-300" />
                    <Star className="h-4 w-4 fill-yellow-300" />
                    <Star className="h-4 w-4 fill-yellow-300" />
                  </span>
                </li>

                <li className="flex items-center justify-between">
                  <p className="text-slate-400">Polish</p>
                  <span className="flex items-center pl-2 text-sm italic">
                    <Star className="h-4 w-4 fill-yellow-300" />
                    <Star className="h-4 w-4 fill-yellow-300" />
                    <Star className="h-4 w-4 fill-yellow-300" />
                    <Star className="h-4 w-4 fill-yellow-300" />
                  </span>
                </li>
              </ul>

              <h3
                key="languages-header"
                className="w-full border-b-2 border-slate-300  text-lg font-semibold text-slate-300"
              >
                TECHNICAL SKILLS
              </h3>
              <ul key="languages-items" className="text-semibold w-full pl-2">
                <li className="">
                  <p className="font-semibold text-slate-400">
                    Cloud Infrastructure:
                  </p>
                  <div className="flex flex-wrap justify-start gap-1 pl-2 pb-2 italic text-slate-400">
                    <p className=" text-sm">Compute Engine</p>
                    <div>
                      <Separator orientation="vertical" />
                    </div>
                    <p className="text-sm ">Biguqery</p>
                    <div>
                      <Separator orientation="vertical" />
                    </div>
                    <p className="text-sm ">Cloud Composer</p>
                    <div>
                      <Separator orientation="vertical" />
                    </div>
                    <p className="text-sm ">Cloud SQL</p>
                    <div>
                      <Separator orientation="vertical" />
                    </div>
                    <p className="text-sm ">Cloud Storage</p>
                    <div>
                      <Separator orientation="vertical" />
                    </div>
                    <p className="text-sm ">Bigtable</p>
                    <div>
                      <Separator orientation="vertical" />
                    </div>
                    <p className="text-sm ">Dataflow</p>
                    <div>
                      <Separator orientation="vertical" />
                    </div>
                    <p className="text-sm ">Pub/Sub</p>
                    <div>
                      <Separator orientation="vertical" />
                    </div>
                    <p className="text-sm ">Cloud Functions</p>
                    <div>
                      <Separator orientation="vertical" />
                    </div>
                    <p className="text-sm ">Cloud Storage</p>
                    <div>
                      <Separator orientation="vertical" />
                    </div>
                    <p className="text-sm ">Cloud Build</p>
                    <div>
                      <Separator orientation="vertical" />
                    </div>
                    <p className="text-sm ">Firebase</p>
                    <div>
                      <Separator orientation="vertical" />
                    </div>
                    <p className="text-sm ">Cloud Repositories</p>
                    <div>
                      <Separator orientation="vertical" />
                    </div>
                    <p className="text-sm ">Cloud Datastore</p>
                    <div>
                      <Separator orientation="vertical" />
                    </div>
                    <p className="text-sm ">Firestore</p>
                    <div>
                      <Separator orientation="vertical" />
                    </div>
                    <p className="text-sm ">
                      Looker Studio (Formerly Data Studio)
                    </p>
                    <div>
                      <Separator orientation="vertical" />
                    </div>
                    <p className="text-sm ">
                      Cloud Operations (Formerly Stackdriver)
                    </p>
                  </div>
                  <p className="font-semibold text-slate-400">
                    Tools and Frameworks:
                  </p>
                  <div className="flex flex-wrap justify-start gap-1 pl-2 pb-2 italic text-slate-400">
                    <p className=" text-sm">Terraform</p>
                    <div>
                      <Separator orientation="vertical" />
                    </div>
                    <p className="text-sm ">DBT</p>
                    <div>
                      <Separator orientation="vertical" />
                    </div>
                    <p className="text-sm ">Pandas</p>
                    <div>
                      <Separator orientation="vertical" />
                    </div>
                    <p className="text-sm ">Spark</p>
                    <div>
                      <Separator orientation="vertical" />
                    </div>
                    <p className="text-sm ">Apache Beam</p>
                    <div>
                      <Separator orientation="vertical" />
                    </div>
                    <p className="text-sm ">Git</p>
                    <div>
                      <Separator orientation="vertical" />
                    </div>
                    <p className="text-sm ">Kafka</p>
                    <div>
                      <Separator orientation="vertical" />
                    </div>
                    <p className="text-sm ">Airflow</p>
                    <div>
                      <Separator orientation="vertical" />
                    </div>
                    <p className="text-sm ">Cron</p>
                    <div>
                      <Separator orientation="vertical" />
                    </div>
                    <p className="text-sm ">Ansible</p>
                    <div>
                      <Separator orientation="vertical" />
                    </div>
                    <p className="text-sm ">Docker</p>
                    <div>
                      <Separator orientation="vertical" />
                    </div>
                    <p className="text-sm ">FastAPI</p>
                    <div>
                      <Separator orientation="vertical" />
                    </div>
                    <p className="text-sm ">React JS</p>
                    <div>
                      <Separator orientation="vertical" />
                    </div>
                    <p className="text-sm ">Next JS</p>
                    <div>
                      <Separator orientation="vertical" />
                    </div>
                    <p className="text-sm ">Puppet</p>
                  </div>
                </li>

                <li className="font-semibold text-slate-400">
                  Configuration Management
                </li>
                <li className="font-semibold text-slate-400">
                  CI/CD Pipelines
                </li>
                <li className="font-semibold text-slate-400">
                  Monitoring & Logging
                </li>
                <li className="font-semibold text-slate-400">
                  Security & Compliance
                </li>
                <li className="font-semibold text-slate-400">Scripting</li>
              </ul>
            </div>
          </div>
          <div className=" flex-1 p-4">
            <h2
              key="certificates-header"
              className="mt-10 w-full scroll-m-20 border-b border-b-slate-700 pb-2 text-3xl font-semibold tracking-tight text-slate-700 drop-shadow-sm transition-colors first:mt-0 dark:border-b-slate-700"
            >
              PROFESSIONAL EXPERIENCE
            </h2>
            <ul className="flex flex-col gap-2 pt-4 pl-4 text-lg text-slate-700">
              <li>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-700 drop-shadow-sm">
                    Senior Data Engineer / Architect
                  </h3>
                  <h4 className="text-xl italic text-slate-700">
                    Sol Millennium Med
                  </h4>
                  <h4 className="text-xl text-slate-700">
                    2021/11 – present | Chicago, USA
                  </h4>
                </div>
                <ul className="mb-6 ml-6 list-disc pl-4 [&>li]:mt-2">
                  <li>
                    Plan, Manage and maintain integrations with outside vendor
                    as well as internal inter departmental data.
                  </li>
                  <li>
                    Built pipelines and integration between SAP B1 with multiple
                    platforms such as Salesforce, SPS, Amazon utilizing azure
                    services such as Azure functions, Azure Managed SQL server,
                    Python, and SQL.
                  </li>
                  <li>
                    Built custom single page web apps utilizing React.js for the
                    user interface, python for the backend.
                  </li>
                  <li>
                    <p>Web application 1:</p>
                    <p className="pl-4">
                      Handled various dynamic approval workflows for requests
                      such as Headcount changes, Employee Changes, Capital
                      Expenditures, Domestic and International Travel, with a
                      pipeline ingesting this data into the data warehouse with
                      a PowerBI dashboard providing key insights of the
                      companies processes and expenditures for C-Suite.
                    </p>
                  </li>
                  <li>
                    <p>Web application 2:</p>
                    <p className="pl-4">
                      Handled collecting global employee data such as
                      compensation, headcounts changes, payroll, and if
                      applicable ROI and performance providing detailed
                      analytics dashboards for various regions and functions.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <h3 className="text-2xl font-semibold text-slate-700 drop-shadow-sm">
                  Data Engineer
                </h3>
                <h4 className="text-xl italic text-slate-700">Slalom</h4>
                <h4 className="text-xl text-slate-700">
                  2021/04 – 2021/11 | Chicago, US
                </h4>

                <h5 className="text-lg font-semibold text-slate-700">
                  Fortune 500 Military focused Insurance Company based out of
                  San Antonio, TX
                </h5>
                <ul className="mb-6 ml-6 list-disc pl-4 [&>li]:mt-2">
                  <li>
                    Worked on creating and maintaining the data platform
                    utilized for risk assessment for insurance premiums using
                    Java as the primary pipeline language.
                  </li>
                  <li>
                    Built pipelines to ingest and process sensitive data, with
                    strict internal data security policies given the company
                    {"'"}s primary clientele being involved with the Military.
                  </li>
                  <li>
                    Updated legacy pipelines to a modern stack achieving 20/30%
                    further efficiencies in processing and storage performance
                    and cost respectively.
                  </li>
                </ul>
                <h5 className="text-lg font-semibold text-slate-700">
                  Best Buy Data Observability in GCP
                </h5>
                <ul className="mb-6 ml-6 list-disc pl-4 [&>li]:mt-2">
                  <li>Architected a data observability platform in GCP.</li>
                  <li>
                    Technologies used: Big Query, Dataflow, Cloud Functions,
                    Data Studio (Looker Studio)
                  </li>
                  <li>
                    Implemented log data analytics for all data source ingestion
                    and processing pipelines being utilized on the Best Buy
                    e-commerce website. Processing and storing terabytes of
                    daily log time series data as cost effectively as possible.
                    With a monthly cost savings above half a million dollars as
                    well as a more informative dashboard for key stakeholders.
                  </li>
                  <li>
                    Built dashboards for pipeline health, as well as usage of
                    various resources to better predict future possible load
                    patterns, allowing for saving in computing costs as well
                    minimizing downtime during critical time periods of the
                    year.
                  </li>
                </ul>
              </li>
              <li>
                <h3 className="text-2xl font-semibold text-slate-700 drop-shadow-sm">
                  GCP Data Engineer
                </h3>
                <h4 className="text-xl italic text-slate-700">Evalueserve</h4>
                <h4 className="text-xl text-slate-700">
                  2020/02 – 2021/04 | Chicago, IL
                </h4>
                <h5 className="text-lg font-semibold text-slate-700">
                  Fortune 500 Military focused Insurance Company based out of
                  San Antonio, TX
                </h5>
                <ul className="mb-6 ml-6 list-disc pl-4 [&>li]:mt-2">
                  <li>
                    Designed and implemented a Data Lake in Google Cloud
                    utilizing Big Query and Cloud Storage to securely house and
                    analyze consumer and customer personally identifiable
                    information (PII), transactional, and behavioral data.
                  </li>
                  <li>
                    Designed and implemented a configurable and scalable
                    Customer 360 ingestion API and data pipeline utilizing
                    Apache Beam (Composer), Google Cloud Dataflow and Big Query
                    to perform entity resolution and provide a single 360 view
                    of a customer across multiple source systems.
                  </li>
                  <li>
                    Implemented Recency, Frequency, Monetary Value (RFM) model
                    analysis that segments the consumer base by their purchasing
                    patterns or habits assigning a numeric value providing
                    visibility into repeated customers vs new customers as well
                    as when combined with the customer 360 view provides insight
                    into methods that had highest purchase conversation.
                  </li>
                  <li>
                    Designed and implemented a GDPR/CCPA data compliance process
                    with the legal team by building web portal for consumer data
                    related requests, as well as the pipeline to automatically
                    action the request upon legal teams review and action
                    selection.
                  </li>
                  <li>
                    Configured Alerting and monitoring of specified metrics and
                    errors to manage cloud infrastructure efficiently utilizing
                    Operations (Stackdriver).
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
