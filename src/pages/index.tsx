import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Star, Linkedin, Github, Minus } from "lucide-react";
import { api } from "@/utils/api";
import { Separator } from "@/components/ui/separator";
import { Quicksand as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const LeftContainer = () => {
  return (
    <div
      key="Left-Sidebar"
      className="w-full bg-slate-800  p-4 text-slate-400 lg:w-96"
    >
      <div
        key="Sidebar-Header"
        className="flex w-full flex-col items-center justify-center p-2"
      >
        {/* <Image
          className="h-32 w-32 rounded-full "
          width={36}
          height={36}
          src="/AdrianAvatar.svg"
          alt={""}
        /> */}
        <h1 className="text-4xl font-semibold text-slate-200">
          Adrian Kardasz
        </h1>
        <h2 className="text-3xl font-medium italic text-slate-300 ">
          Data Architect
        </h2>
        <div className="">
          <Link
            href="mailto:Adrian.kardasz1@gmail.com"
            className="flex items-center gap-2 align-baseline text-xl font-normal "
          >
            <Mail className="inline h-5" />
            Adrian.kardasz1
          </Link>
          <Link
            href="https://www.linkedin.com/in/adriankardasz/"
            className="flex items-center gap-2 align-baseline text-xl font-normal "
          >
            <Linkedin className="inline h-5 " />
            AdrianKardasz
          </Link>
          <Link
            href="https://github.com/aKardasz"
            className="flex items-center gap-2 align-baseline text-xl font-normal "
          >
            <Github className="inline h-5 " />
            AKardasz
          </Link>

          <h3 className="flex items-center gap-2 align-baseline text-xl font-normal ">
            <MapPin className="inline h-5 " />
            Chicago, IL
          </h3>
        </div>
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
            <p className="text-slate-400">Azure Administrator Associate</p>
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
            <div className="flex flex-wrap justify-start gap-2 pb-2 pl-2 italic text-slate-400">
              <p className="text-sm">Compute Engine</p>
              <div>
                <Separator orientation="vertical" />
              </div>
              <p className="text-sm ">Bigquery</p>
              <div>
                <Separator orientation="vertical" />
              </div>
              <p className="text-sm ">Cloud SQL</p>
              <div>
                <Separator orientation="vertical" />
              </div>
              <p className="text-sm ">Bigtable</p>

              <div>
                <Separator orientation="vertical" />
              </div>
              <p className="text-sm ">Cloud Storage</p>
              <div>
                <Separator orientation="vertical" />
              </div>
              <p className="text-sm ">Cloud Composer</p>

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
              <p className="text-sm ">App Engine</p>
              <div>
                <Separator orientation="vertical" />
              </div>
              <p className="text-sm ">Cloud Run</p>
              <div>
                <Separator orientation="vertical" />
              </div>
              <p className="text-sm ">GKE</p>
              <div>
                <Separator orientation="vertical" />
              </div>
              <p className="text-sm ">Firestore</p>
              <div>
                <Separator orientation="vertical" />
              </div>
              <p className="text-sm ">Looker Studio (Formerly Data Studio)</p>
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
            <div className="flex flex-wrap justify-start gap-2 pb-2 pl-2 italic text-slate-400">
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
          <p className="font-semibold text-slate-400">Programming Languages:</p>
          <div className="flex flex-wrap justify-start gap-2 pb-2 pl-2 italic text-slate-400">
            <p className="text-sm">Python</p>
            <div>
              <Separator orientation="vertical" />
            </div>
            <p className="text-sm ">Golang</p>
            <div>
              <Separator orientation="vertical" />
            </div>
            <p className="text-sm ">Java</p>
            <div>
              <Separator orientation="vertical" />
            </div>
            <p className="text-sm ">JavaScript</p>
            <div>
              <Separator orientation="vertical" />
            </div>
            <p className="text-sm ">C#</p>
          </div>
          <li className="font-semibold text-slate-400">
            Configuration Management
          </li>
          <li className="font-semibold text-slate-400">CI/CD Pipelines</li>
          <li className="font-semibold text-slate-400">Monitoring & Logging</li>
          <li className="font-semibold text-slate-400">
            Security & Compliance
          </li>
          <li className="font-semibold text-slate-400">Scripting</li>
        </ul>
      </div>
    </div>
  );
};

const Divider = () => {
  return (
    <>
      <div className=" w-full border-b-4 border-dotted border-sky-400" />
    </>
  );
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kardasz.dev</title>
        <meta name="description" content="Adrian Kardasz Resume Site." />
        <link rel="icon" href="/icons8-working-with-a-laptop-color-96.png" />
      </Head>
      <main
        suppressHydrationWarning
        className={cn(
          "min-w-screen flex h-screen min-h-screen w-screen justify-center overflow-scroll bg-slate-200 font-sans",
          fontSans.variable
        )}
      >
        <div
          key="Root-Container"
          className="container flex h-fit min-h-full flex-col items-stretch border bg-slate-100 shadow-lg lg:flex-row"
        >
          <LeftContainer />

          <div key="RightContainer" className="flex flex-1 flex-wrap">
            <div
              key="ContentTopic_ProfessionalExperience"
              className="m-4 w-full max-w-none rounded-xl border-2 p-4"
            >
              <div key="ContentHeader_ProfessionalExperience" className="">
                <h1 className="border-b-4 border-dashed border-slate-700 text-4xl font-bold text-slate-700 drop-shadow-lg">
                  Professional Experience
                </h1>
              </div>
              <div
                key="ContentBody_ProfessionalExperience"
                className="flex flex-col items-center justify-center gap-8 p-4"
              >
                <div key="Card_SolM" className="rounded-xl ">
                  <div key="Card_SolM_Header" className="border-b-[2px]">
                    <h2
                      key="Position_Name"
                      className="text-3xl font-semibold text-slate-600 drop-shadow-lg"
                    >
                      Cloud Architect
                    </h2>
                    <div className="flex items-end justify-between text-slate-500">
                      <h3
                        key="Company_Name_Location"
                        className=" text-2xl text-slate-500"
                      >
                        Sol-Millennium Medical Group | Chicago, IL
                      </h3>
                      <h4
                        key="WorkDurationRange"
                        className="self-end text-xl font-light text-slate-500"
                      >
                        2021/11 – Present
                      </h4>
                    </div>
                  </div>
                  <div key="Card_SolM_Body" className="drop-shadow-md">
                    <ul className="text- mx-2 flex list-disc flex-col text-lg font-normal text-slate-500 md:mx-8 [&>li]:mt-2">
                      <span className="mt-2 text-xl font-bold text-slate-500">
                        Solution Architect - Google Cloud Data Lake
                      </span>
                      <li className="mx-2 font-normal md:mx-8">
                        <p>
                          Collaborated with cross-functional teams to plan,
                          design, and implement integrations with outside
                          vendors and internal interdepartmental data sources,
                          ensuring seamless communication and coordination.
                        </p>
                      </li>
                      <li className="mx-2 font-normal md:mx-8">
                        <p>
                          Developed robust pipelines and integrations between
                          SAP B1 and multiple platforms, such as Salesforce,
                          SPS, and Amazon, leveraging GCP services like Google
                          Cloud Functions, Google Cloud SQL, Google Cloud
                          Storage, and Google Cloud Dataflow for efficient data
                          processing, storage, and management.
                        </p>
                      </li>
                      <li className="mx-2 font-normal md:mx-8">
                        <p>
                          Designed and led a company Data Exploration/Collection
                          initiative to allow any business stakeholders to begin
                          the process of building and transforming critical
                          business data utilizing GCP services such as Google
                          Cloud Dataprep, Google Cloud Data Studio, and Google
                          Cloud App Engine. This initiative improved
                          collaboration and the discovery and collection of
                          various previously unutilized data sources.
                        </p>
                      </li>

                      <li className="mx-2 font-normal md:mx-8">
                        <p>
                          Reviewed, researched, and created company toolings
                          such as single page web applications using ReactJS for
                          the user interface, python for the backend, utilizing
                          GCP services like Google Cloud Functions, Google Cloud
                          Storage, Google Cloud Pub/Sub, and Google Cloud SQL,
                          Cloud Run for easier infrastructure maintenance with
                          key business stakeholders.
                        </p>
                        <ul className=" list-none [&>li]:mt-2">
                          <li>
                            <b className="font-medium text-slate-600">
                              Web Application 1:
                            </b>
                            <p className="ml-4 text-left font-normal">
                              Manages dynamic approval workflows taking into
                              consideration company code, cost center, region,
                              location, and function for requests such as
                              Headcount changes, Employee Changes, Capital
                              Expenditures, Domestic and International Travel,
                              streamlining human resources, finance, as well as
                              c-suit processes in a compliant, auditable, and
                              automated manner. With the benefit of integrations
                              between vital company services and software like
                              BambooHR, Microsoft Office, SAP B1, Salesforce,
                              and Google Cloud Data Studio.
                            </p>
                          </li>
                          <li>
                            <b className="font-medium text-slate-600">
                              Web Application 2:
                            </b>
                            <p className="ml-4 text-left font-normal">
                              Handles the collection of global employee data
                              such as compensation, headcounts changes, payroll,
                              and, if applicable, ROI and performance, providing
                              detailed analytics dashboards across global
                              regions, functions, and cost centers.
                            </p>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <Divider />
                <div key="Card_Slalom" className="rounded-xl">
                  <div key="Card_Slalom_Header" className="border-b-[2px]">
                    <h2
                      key="Position_Name"
                      className="text-3xl font-semibold text-slate-600 drop-shadow-lg"
                    >
                      Senior Data Engineer
                    </h2>
                    <div className="flex items-end justify-between">
                      <h3
                        key="Company_Name_Location"
                        className=" text-2xl text-slate-500"
                      >
                        Slalom | Chicago, IL
                      </h3>
                      <h4
                        key="WorkDurationRange"
                        className="self-end text-xl font-light text-slate-500"
                      >
                        2021/04 – 2021/11
                      </h4>
                    </div>
                  </div>
                  <div key="Card_Slalom_Body" className="drop-shadow-md">
                    <ul className="list-None mx-2 flex flex-col text-left text-lg font-normal md:mx-8 [&>li]:mt-2">
                      <li className="text-lg font-bold text-slate-600">
                        <span className="text-xl text-slate-500">
                          Best Buy - Data Observability in GCP
                        </span>

                        <ul
                          className={
                            "mx-2 flex list-disc flex-col text-left text-lg font-normal text-slate-500 md:mx-8 [&>li]:mt-2"
                          }
                        >
                          <li className="">
                            <p>
                              Leveraged my expertise in Big Query, Dataflow,
                              Cloud Functions, Data Studio (Looker Studio), and
                              Stackdriver (Cloud Operations) to streamline the
                              collection of data ingestion and processing
                              metrics and logs from various systems, pipelines,
                              and APIs that exist within the Best Buy cloud
                              environment.
                            </p>
                          </li>

                          <li className="">
                            <p>
                              Implemented metrics and log data analytics to
                              process and store terabytes of daily time-series
                              data, creating insights that lead to cost savings
                              of over half a million dollars per month through
                              improved observability and better utilization of
                              various cloud resources.
                            </p>
                          </li>

                          <li className="">
                            <p>
                              Contributed to designing and implementing a highly
                              available and scalable data infrastructure,
                              utilizing industry best practices and cloud
                              technologies.
                            </p>
                          </li>
                        </ul>
                      </li>

                      <li className="text-lg font-bold text-slate-600">
                        <span className="text-xl text-slate-500">
                          Fortune 500 military-focused insurance company based
                          in San Antonio, TX
                        </span>
                        <ul
                          className={
                            "mx-2 flex list-disc flex-col text-left text-lg font-normal text-slate-500 md:mx-8 [&>li]:mt-2 "
                          }
                        >
                          <li className="">
                            <p>
                              Collaborated with a cross-functional team of data
                              analysts, architects, and developers to create and
                              maintain a data platform for risk assessment of
                              insurance premiums, using Java as the primary
                              pipeline language.
                            </p>
                          </li>

                          <li className="">
                            <p>
                              Improved legacy pipelines, achieving 15% more
                              records processed utilizing less CPU and memory
                              resources, led to cost savings.
                            </p>
                          </li>
                          <li className="">
                            <p>
                              Streamlined pipeline configuration and setup using
                              Infrastructure as Code (IaC) and templated code
                              for optimizing initial pipeline codebase setup per
                              company standards.
                            </p>
                          </li>
                          <li className="">
                            <p>
                              The technology used: Snowflake, S3, Step
                              Functions, Lambda, SNS, Glue Data Catalog, ECS,
                              CloudWatch, and Datadog.
                            </p>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <Divider />
                <div key="Card_EvalueServe" className="rounded-xl">
                  <div
                    key="Card_EvalueServe_Header"
                    className="border-b-[2px] "
                  >
                    <h2
                      key="Position_Name"
                      className="text-3xl font-semibold text-slate-600 drop-shadow-lg"
                    >
                      Data Engineer
                    </h2>
                    <div className="flex items-end justify-between">
                      <h3
                        key="Company_Name_Location"
                        className=" text-2xl text-slate-500"
                      >
                        Evalueserve | Chicago, IL
                      </h3>
                      <h4
                        key="WorkDurationRange"
                        className="self-end text-xl font-light text-slate-500"
                      >
                        2020/02 – 2021/04
                      </h4>
                    </div>
                  </div>
                  <div key="Card_Slalom_Body" className="drop-shadow-md">
                    <ul className="list-None mx-2 flex flex-col text-left text-lg font-normal md:mx-8 [&>li]:mt-2">
                      <li className="text-lg font-bold text-slate-600">
                        <span className="text-xl text-slate-500">
                          Kraft Heinz - Digital Marketing Data Platform
                        </span>

                        <ul
                          className={
                            "mx-2 flex list-disc flex-col text-left text-lg font-normal text-slate-500 md:mx-8 [&>li]:mt-2"
                          }
                        >
                          <li className="">
                            <p>
                              Assisted in the architecture and implementing of a
                              secure Data Lake on Google Cloud, leveraging Big
                              Query and Cloud Storage, to store and analyze
                              consumer and customer data, including personally
                              identifiable information (PII), transactional, and
                              behavioral records.
                            </p>
                          </li>

                          <li className="">
                            <p>
                              Developed and implemented a scalable Customer 360
                              ingestion API and data pipeline, utilizing Apache
                              Beam (Composer), Google Cloud Dataflow, and Big
                              Query to perform entity resolution and
                              comprehensively view each customer across multiple
                              source systems.
                            </p>
                          </li>

                          <li className="">
                            <p>
                              Used the Recency, Frequency, Monetary Value (RFM)
                              model analysis to segment the consumer base based
                              on purchasing patterns and habits, providing
                              insight into repeat customers vs. new customers.
                              Combined with the customer 360 views, this model
                              offered valuable information on the most effective
                              methods for increasing conversion rates.
                            </p>
                          </li>
                          <li className="">
                            <p>
                              Collaborated with the legal team to design and
                              implement a GDPR/CCPA data compliance process,
                              building a web portal for consumer data requests
                              and a pipeline to process requests upon legal
                              review and action selection automatically.
                            </p>
                          </li>
                          <li className="">
                            <p>
                              Configured alerting and monitoring systems to
                              manage cloud infrastructure efficiently, utilizing
                              Operations (Stackdriver) to identify and resolve
                              issues before they impact business operations.
                            </p>
                          </li>

                          <li className="">
                            <p>
                              Utilized BigQuery to implement complex business
                              logic within a Data Warehouse, enabling advanced
                              BI reporting and effective marketing campaigns.
                            </p>
                          </li>
                          <li className="">
                            <p>
                              Employed cutting-edge technologies such as Apache
                              Airflow, Google Cloud Dataflow (Apache Beam), and
                              Google Cloud Storage to streamline and optimize
                              data processing workflows.
                            </p>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <Divider />
                <div key="Card_Power" className="rounded-xl">
                  <div key="Card_Power_Header" className="border-b-[2px]">
                    <h2
                      key="Position_Name"
                      className="text-3xl font-semibold text-slate-600 drop-shadow-lg"
                    >
                      Cloud Engineer
                    </h2>
                    <div className="flex items-end justify-between">
                      <h3
                        key="Company_Name_Location"
                        className=" text-2xl text-slate-500"
                      >
                        Power Construction (Palmer Consulting Group) | Chicago,
                        IL
                      </h3>
                      <h4
                        key="WorkDurationRange"
                        className="self-end text-xl font-light text-slate-500"
                      >
                        2018/06 – 2020/02
                      </h4>
                    </div>
                  </div>
                  <div key="Card_Power_Body" className="drop-shadow-md">
                    <ul className="list-None mx-2 flex flex-col text-left text-lg font-normal md:mx-8 [&>li]:mt-2">
                      <li className="text-lg font-bold text-slate-600">
                        <span className="text-xl text-slate-500">
                          Managed Services
                        </span>

                        <ul
                          className={
                            "mx-2 flex list-disc flex-col text-left text-lg font-normal text-slate-500 md:mx-8 [&>li]:mt-2 "
                          }
                        >
                          <li className="">
                            <p>
                              Cloud administrator of Microsoft Azure
                              environments, which included Azure ADConnect
                              configuring virtual machines, storage accounts,
                              and Azure resource group.
                            </p>
                          </li>

                          <li className="">
                            <p>
                              Designed, planned, and migrated customer
                              on-premises data centers/applications deployments
                              to Microsoft Azure.
                            </p>
                          </li>

                          <li className="">
                            <p>
                              Troubleshoot VMware ESX, Windows Server, Active
                              Directory, and physical infrastructure issues,
                              documenting and performing corrections.
                            </p>
                          </li>
                          <li className="">
                            <p>
                              I configured and deployed MDM/Intune for Power
                              Construction as well as many leading general
                              contracting firms.
                            </p>
                          </li>
                          <li className="">
                            <p>
                              Skillfully worked with Microsoft 365 and office
                              365, including Teams, SharePoint Online, OneDrive,
                              and Exchange Online.
                            </p>
                          </li>

                          <li className="">
                            <p>
                              I managed the day-to-day activity of the cloud
                              environment, supporting development teams with
                              their requirements and considering available and
                              future resources.
                            </p>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex h-16 w-full items-center justify-around bg-slate-200 text-slate-400">
              <div>
                <p>Kardasz.dev © 2023</p>
              </div>
              <div>
                <a target="_blank" href="https://icons8.com">
                  Icons8
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
