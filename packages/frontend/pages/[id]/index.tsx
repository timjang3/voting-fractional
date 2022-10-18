import { Box } from "@/components/Box";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Text } from "@/components/Text";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import { ProjectQuery, ProjectMutation, VoteMutation } from "./queries";
import React, { useState, useEffect } from "react";

const UserPage = () => {
  const router = useRouter();
  const { data, loading, error } = useQuery(ProjectQuery, {
    variables: {
      id: 1,
    },
  });

  const [edit, setEdit] = useState(false);
  const [addOption, setAddOption] = useState(false);
  const [isVoting, setIsVoting] = useState(false);
  const [options, setOptions] = useState([]);
  const [newOption, setNewOption] = useState("");

  const [project, data1] = useMutation(ProjectMutation, {
    onCompleted: (data) => {
      console.log(data);
    },
  });

  const [addVote, data2] = useMutation(VoteMutation, {
    onCompleted: (data) => {
      console.log(data);
    },
  });

  useEffect(() => {
    if(data){
      setOptions(data.project.options)
    }
  }, [data]);

  function handleAddOption(e: any) {
    let newOptionArr = [...options];

    if (!newOptionArr.includes(newOption) && newOption != "") {
      newOptionArr.push(newOption);
      setOptions(newOptionArr);
      setNewOption("");
    }
    e.preventDefault();
  }

  function handleNewOption(e: any) {
    setNewOption(e.target.value);
    e.preventDefault();
  }

  function handleDeleteOption(opt: string) {
    let newOptionArr = [...options];

    if (newOptionArr.includes(opt)) {
      newOptionArr.splice(newOptionArr.indexOf(newOption), 1);
      setOptions(newOptionArr);
    }
  }

  return (
    <Box
      backgroundColor="gray5"
      minHeight="viewHeight"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Card width="68">
        <Box display="flex" flexDirection="column">
          <Box display="flex" justifyContent="space-between">
            <Text>{data && data.project.title}</Text>
            <Box display="flex" gap="1.5">
              <Button color="blue" variant="transparent"
              onClick={()=>{
                setIsVoting(voting => !voting)
              }}
              >
                Vote
              </Button>
              {data && data.project.canEdit && (
                <Button
                  color="gray"
                  onClick={() => {
                    setEdit((v) => !v);
                    setOptions(data.project.options);
                  }}
                >
                  edit
                </Button>
              )}
            </Box>
          </Box>
          <div id="progressBar" style={{ marginTop: "10px" }}>
            <div id="barStatus"></div>
          </div>
          <Box display="flex" gap="10" marginTop="4" marginBottom="2">
            <Box display="flex" flexDirection="column">
              <Text>Votes</Text>
              <Text>{data && data.project.votes.length}/10</Text>
            </Box>
            <Box display="flex" flexDirection="column">
              <Text>Winning Option</Text>
            </Box>
          </Box>
          {edit && (
            <>
              {options &&
                options.map((option: string, i: number) => (
                  <Box
                    key={i}
                    display="flex"
                    justifyContent="space-between"
                    marginTop="1.5"
                  >
                    <Text>{option}</Text>
                    <Button
                      color="red"
                      size="small"
                      onClick={() => {
                        handleDeleteOption(option);
                      }}
                    >
                      x
                    </Button>
                  </Box>
                ))}
              {addOption && (
                <form>
                  <input
                    type="text"
                    style={{ marginTop: "10px" }}
                    onChange={handleNewOption}
                    placeholder="Enter new option"
                  />
                  <button onClick={handleAddOption}>submit</button>
                </form>
              )}
              <Button
                marginTop="3"
                color="gray"
                onClick={() => {
                  setAddOption((ao) => true);
                }}
              >
                <Text>Add Options</Text>
              </Button>
              <Box
                display="flex"
                justifyContent="flex-end"
                gap="1"
                marginTop="4"
              >
                <Button
                  size="small"
                  variant="transparent"
                  onClick={() => {
                    setEdit((v) => false);
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onClick={async () => {
                    project({
                      variables: {
                        options: options,
                      },
                    });

                    setEdit(false);
                    router.reload();
                  }}
                  size="small"
                >
                  Save
                </Button>
              </Box>
            </>
          )}
          {isVoting && (
            <>
              {options &&
                options.map((option: string, i: number) => (
                  <Box
                    key={i}
                    display="flex"
                    justifyContent="space-between"
                    marginTop="1.5"
                  >
                    <Text>{option}</Text>
                    <Button
                      color="gray"
                      size="small"
                      onClick={() => {
                        addVote({
                          variables: {
                            votes:{
                              userId: router.query.id,
                              choice: option
                            }
                          },
                        });
                      }}
                    >
                      vote
                    </Button>
                  </Box>
                ))}
              <Box
                display="flex"
                justifyContent="flex-end"
                gap="1"
                marginTop="4"
              >
                <Button
                  size="small"
                  variant="transparent"
                  onClick={() => {
                    setEdit((v) => false);
                  }}
                >
                  Cancel
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Card>
    </Box>
  );
};

export default UserPage;
